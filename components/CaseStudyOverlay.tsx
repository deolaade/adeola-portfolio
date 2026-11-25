/* Case study overlay. Each case study lives in ./case-studies. */
import Rezidant from "./case-studies/Rezidant";
import Filmhouse from "./case-studies/Filmhouse";
import Pyyr from "./case-studies/Pyyr";
import Lohli from "./case-studies/Lohli";

export default function CaseStudyOverlay() {
  return (
    <div className="cs" id="cs" role="dialog" aria-modal="true" aria-label="Case study" hidden><div className="cs-in"><button className="cs-x" type="button" aria-label="Close project"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path></svg></button><Rezidant /><Filmhouse /><Pyyr /><Lohli /></div></div>
  );
}
