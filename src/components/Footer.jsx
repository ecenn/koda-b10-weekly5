import { Link } from "react-router"

function Footer() {
  return (
    <footer className="flex flex-col pt-10 pb-4 px-20 gap-12 bg-bg-light *:font-public border border-t border-blight">
      <div className="flex gap-8">
        <div className="flex flex-col flex-2 gap-4">
          <h2 className="font-fraunces font-bold text-dark">WargaReport</h2>
          <p className="text-semi-dark text-sm font-public">WargaReport is an independent civic reporting platform for municipal infrastructure issues across Indonesia. Residents submit evidence, follow SLA countdowns, and track resolution updates from the responsible agencies.</p>
          <p className="text-sm font-semibold text-[#A33F31]">Not for life-threatening emergencies — call 112 (National Emergency Call Center) or BPBD DKI directly.</p>
        </div>
        <div className="flex flex-3 justify-around">
          <div className="flex flex-col gap-2">
            <p className="font-ibm text-bg-dark uppercase text-xs">Citizens</p>
            <Link to="">File a report</Link>
            <Link to="">Track complaint</Link>
            <Link to="">Public reports registry</Link>
            <Link to="">My filing history</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-ibm text-bg-dark uppercase text-xs">Agencies</p>
            <Link to="">Participating bureaus</Link>
            <Link to="">Officer triage queue</Link>
            <Link to="">SLA benchmarks</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-ibm text-bg-dark uppercase text-xs">Civic Trust</p>
            <Link to="">Help & FAQs</Link>
            <Link to="">Evidence guidelines</Link>
            <Link to="">PII & redaction policy</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between *:text-xs *:text-semi-light pt-4 border-t border-blight">
        <p>&copy; 2026 WargaReport. All rights reserved.</p>
        <p>UU No. 25/2009 Compliant</p>
      </div>
    </footer>
  )
}

export default Footer