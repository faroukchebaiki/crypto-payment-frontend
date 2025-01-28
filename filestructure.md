src/
├── components/                 # Reusable components
│   ├── Navbar.jsx             # Top navigation bar
│   ├── Footer.jsx             # Footer section
│   └── WalletInputForm.jsx    # Form for Bitcoin wallet input
├── pages/                      # Main page components
│   ├── Index.jsx              # Homepage with links to documentation, API, etc.
│   ├── Contact.jsx            # Contact page
│   ├── Donation.jsx           # Donation page
│   ├── Documentation.jsx      # Documentation page
│   └── API.jsx                # API page for wallet input and API key generation
├── routes/                     # Routing configuration
│   └── AppRoutes.jsx          # React Router route setup
├── store/                      # State management (Redux Toolkit)
│   ├── slices/                # Individual feature slices
│   │   └── merchantSlice.js   # Slice for handling merchants and API keys
│   └── store.js               # Redux store configuration
├── styles/                     # Custom styling (if any)
│   └── global.css             # Global CSS overrides
├── App.jsx                     # Main App component
├── index.js                    # Entry point
└── assets/                     # Static assets (images, icons, etc.)
