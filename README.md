# # 🌱 Water-to-Earn DIY Project

Turn watering your plants into token rewards using:
- ESP32 soil moisture sensor
- Node.js backend with ethers.js
- ERC20-like Solidity smart contract
- Minimal frontend dashboard

## Project Structure
- `firmware/`: ESP32 Arduino sketch
- `backend/`: Node.js backend (Render deployable)
- `contract/`: Solidity PLNT token contract
- `frontend/`: Dashboard (GitHub Pages deployable)

## Instructions
1. Flash the ESP32 with `firmware/plant_to_earn.ino`
2. Deploy `contract/PlantToken.sol` to Polygon Mumbai (e.g., using Remix)
3. Deploy backend to Render (use `.env.example` to create your `.env`)
4. Deploy frontend on GitHub Pages (static hosting)
5. Water your plant and earn tokens!
