const contractAddress = "YOUR_CONTRACT_ADDRESS";
const abi = [
  "function balanceOf(address account) view returns (uint256)"
];

let provider;
let signer;
let contract;

document.getElementById('connectWallet').onclick = async () => {
  if (window.ethereum) {
    await ethereum.request({ method: 'eth_requestAccounts' });
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    const address = await signer.getAddress();
    document.getElementById('walletAddress').innerText = address;

    contract = new ethers.Contract(contractAddress, abi, provider);
    updateBalance();
    fetchEvents();
  } else {
    alert("Install Metamask!");
  }
};

async function updateBalance() {
  const address = await signer.getAddress();
  const balance = await contract.balanceOf(address);
  document.getElementById('balance').innerText = ethers.utils.formatEther(balance) + " PLNT";
}

async function fetchEvents() {
  const res = await fetch('https://your-backend-url.onrender.com/watering-events');
  const data = await res.json();

  const eventsList = document.getElementById('events');
  eventsList.innerHTML = '';
  data.forEach(event => {
    const li = document.createElement('li');
    li.innerText = `Watered at ${new Date(event.timestamp).toLocaleString()} (moisture: ${event.moisture})`;
    eventsList.appendChild(li);
  });
}
