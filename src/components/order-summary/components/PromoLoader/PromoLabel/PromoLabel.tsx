import React from 'preact/compat';
import { CreditCardSolid, TagSolid, XMarkSolid } from '@liquidcommerceteam/preact-heroicons';

function PromoLabel({ value, type, onRemove }) {
  return (
    <div className="rounded-md bg-green-100 py-0.5 px-2.5">
      <div className="flex flex-row gap-1 items-center">
        <div className="text-sm text-green-800">
          {type === 'promocode' ? <TagSolid /> : <CreditCardSolid />}
        </div>
        <div className="text-xs font-bold text-green-800 leading-[18px]">{value}</div>
        <div className="text-sm text-green-500 hover:text-green-800 cursor-pointer">
          <XMarkSolid onClick={onRemove} />
        </div>
      </div>
    </div>
  );
}

export default PromoLabel;
