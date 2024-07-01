/* eslint-disable react/no-danger */
import { policyAgreed, setPolicyAgreed } from '@/signals/checkout.signals';
interface LegalProps {
  fontFamily: string;
  retailerLegalText: string;
}

function Legal({ fontFamily, retailerLegalText }: LegalProps) {
  return (
    <div className="flex flex-col" style={{ fontFamily }}>
      <label className="text-sm flex flex-row gap-2 py-2 items-start">
        <input
          type="checkbox"
          name="policyAgreed"
          className="mt-1"
          checked={policyAgreed.value}
          onChange={(event) => {
            setPolicyAgreed(event.currentTarget.checked);
          }}
        />
        {`I agree to ReserveBar's Price and Substitution Policy.`}
      </label>
      <div
        style={{ fontFamily, fontSize: 12 }}
        dangerouslySetInnerHTML={{ __html: retailerLegalText }}
      />
    </div>
  );
}

export default Legal;
