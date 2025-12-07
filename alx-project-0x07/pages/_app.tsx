import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
```

---

## 📂 **Where to Place This File:**
```
alx-project-0x07/
└── pages/
    └── _app.tsx          ← Place here
