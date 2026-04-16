# 🏛️ ChainVault RWA Protocol
### AI-Powered Real-World Asset Tokenization on Algorand

> **Algorand Web3 Masterclasses — Pitch Competition 2026**  
> Built by [Gopichand Challa](https://github.com/gopichandchalla16) · [@GopichandAI](https://x.com/GopichandAI) · Guntur, India

---

## 🚨 The Problem

India has a **$1.3 trillion real-estate market** and a **$40 billion annual property fraud** problem.

- 67% of civil court cases in India are property disputes
- Land records are paper-based, fragmented across 640+ districts
- No trustless way to verify asset ownership before a transaction
- Buyers have zero protection — fraud is discovered only after payment

**The world's largest democracy cannot tokenize its land because it cannot verify its land.**

---

## ✅ The Solution: ChainVault RWA Protocol

ChainVault is an **AI-powered real-world asset tokenization platform** built on Algorand that:

1. **Verifies** property documents using an AI agent before any token is minted
2. **Tokenizes** the verified asset as an Algorand Standard Asset (ASA) with ARC-19 compliant metadata
3. **Records** the verification proof permanently on-chain — immutable audit trail
4. **Enables** trustless P2P property transfers with full on-chain ownership history

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                   USER / dAPP                        │
│         (uploads property document + details)        │
└──────────────────────┬──────────────────────────────┘
                       │
           ┌───────────▼────────────┐
           │   AI VERIFICATION      │
           │   LAYER (Python)       │
           │                        │
           │  • document_checker.py │  ← LangChain + Groq LLM
           │  • risk_scorer.py      │  ← Fraud risk 0-100
           │  • fraud_detector.py   │  ← Pattern analysis
           └───────────┬────────────┘
                       │  AI Score + Verified Metadata
           ┌───────────▼────────────┐
           │   ALGORAND LAYER       │
           │                        │
           │  • algorand_writer.py  │  ← py-algorand-sdk
           │  • ASA Mint (ARC-19)   │  ← Verified RWA token
           │  • On-chain audit log  │  ← Txn note field proof
           └───────────┬────────────┘
                       │
           ┌───────────▼────────────┐
           │   FRONTEND (React)     │
           │                        │
           │  • Upload & verify     │
           │  • View Asset ID       │
           │  • Transfer ownership  │
           │  • Pera / Web3Auth     │
           └────────────────────────┘
```

---

## ⚡ How It Works (3 Steps)

### Step 1 — Upload & AI Verify
User uploads property document (PDF/image). The AI agent:
- Extracts key claims (owner name, survey number, area, location)
- Cross-checks for inconsistencies and red flags
- Returns a **Fraud Risk Score (0–100)** and **Verification Status**
- Documents with score < 30 are approved for minting

### Step 2 — Mint Verified ASA on Algorand
If AI approves the document:
- A unique ASA is created with ARC-19 metadata
- AI verification hash is written into the Algorand transaction note
- The property becomes a **verifiable, transferable on-chain asset**

### Step 3 — Transfer & Track Ownership
- Owners can transfer the ASA to a buyer
- Full transaction history available on Algorand explorer
- Freeze/Clawback roles available for regulatory compliance

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Blockchain** | Algorand (ASA, ARC-19, py-algorand-sdk) |
| **AI / LLM** | LangChain · Groq LLM · PyPDF2 |
| **Backend** | Python 3.10+ · FastAPI |
| **Frontend** | React · Vite · AlgoKit |
| **Auth** | Web3Auth · Pera Wallet · Defly |
| **Storage** | IPFS via Pinata (document hash) |
| **Testnet** | Algorand TestNet |

---

## 📁 Project Structure

```
chainvault-rwa-protocol/
├── ai_verifier/
│   ├── document_checker.py     ← AI document verification agent
│   ├── risk_scorer.py          ← Fraud risk scoring engine
│   ├── fraud_detector.py       ← Pattern-based fraud detection
│   └── requirements.txt        ← AI layer dependencies
├── blockchain/
│   └── algorand_writer.py      ← Algorand ASA minting + on-chain proof
├── models/
│   └── rwa_asset.py            ← Pydantic schema for RWA metadata
├── projects/                   ← AlgoKit frontend + contracts
├── api/
│   └── main.py                 ← FastAPI endpoints
├── .env.example                ← Environment variables template
├── setup.sh                    ← One-click setup
├── PITCH.md                    ← Pitch deck in markdown
└── README.md
```

---

## 🚀 Quick Start

### 1. Clone & Setup
```bash
git clone https://github.com/gopichandchalla16/Algorand_TokenizeRWATemplate
cd Algorand_TokenizeRWATemplate
bash setup.sh
```

### 2. Configure Environment
```bash
cp .env.example .env
# Add your keys: GROQ_API_KEY, ALGORAND_TOKEN, PINATA_JWT
```

### 3. Run AI Verifier
```bash
cd ai_verifier
pip install -r requirements.txt
python document_checker.py
```

### 4. Run Backend API
```bash
cd api
uvicorn main:app --reload
# API available at http://localhost:8000
```

### 5. Run Frontend
```bash
cd projects/TokenizeRWATemplate-frontend
npm install && npm run dev
```

---

## 🌍 Market Opportunity

| Market | Size |
|---|---|
| India Real Estate | $1.3 Trillion |
| Global RWA Tokenization (2030 projection) | $16 Trillion |
| India Property Fraud (annual) | $40 Billion |
| Algorand RWA Ecosystem | Growing |

---

## 🔮 Roadmap

- [x] **Phase 1** — ASA tokenization template (done)
- [x] **Phase 2** — AI verification layer (current)
- [ ] **Phase 3** — Government API integration (Digilocker, India Stack)
- [ ] **Phase 4** — Multi-country RWA support
- [ ] **Phase 5** — DeFi lending against verified RWA collateral

---

## 👨‍💻 Builder

**Gopichand Challa** — AI × Web3 Engineer, Guntur, Andhra Pradesh, India

- 🐦 X/Twitter: [@GopichandAI](https://x.com/GopichandAI)
- 💻 GitHub: [gopichandchalla16](https://github.com/gopichandchalla16)
- 💼 LinkedIn: [gopichandchalla](https://linkedin.com/in/gopichandchalla)
- 📧 gopichandchalla516@gmail.com

> *Shortlisted at Cardano Hackathon Grand Finale, IBW Bengaluru 2025*  
> *Algorand Web3 Masterclasses — Batch 3, 2026*

---

## ⚠️ Disclaimer

This project is a technical proof-of-concept built for the Algorand Web3 Masterclasses Pitch Competition. It does not constitute legal, financial, or investment advice.

---

<div align="center">

**Built with ❤️ on Algorand · Powered by AI · Made in India 🇮🇳**

</div>
