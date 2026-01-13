'use client';

import { useState } from 'react';
import WhitepaperListSection from '@/components/sections/WhitepaperListSection';
import WhitepaperFormSection from '@/components/sections/WhitepaperFormSection';
import { Whitepaper } from '@/lib/data/whitepaper';

interface WhitepaperFormLabels {
  hint: string;
  selectionTitle: string;
  noSelection: string;
  salutation: string;
  salutationOptions: {
    mr: string;
    mrs: string;
    diverse: string;
  };
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
  isCustomer: string;
  isCustomerYes: string;
  isCustomerNo: string;
  source: string;
  privacy: string;
  submit: string;
}

interface WhitepaperClientContentProps {
  whitepapers: Whitepaper[];
  formTitle: string;
  formNote: string;
  formLabels: WhitepaperFormLabels;
}

export default function WhitepaperClientContent({
  whitepapers,
  formTitle,
  formNote,
  formLabels,
}: WhitepaperClientContentProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const handleSelect = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  return (
    <>
      <WhitepaperListSection
        whitepapers={whitepapers}
        selectedIds={selectedIds}
        onSelect={handleSelect}
      />
      <WhitepaperFormSection
        title={formTitle}
        note={formNote}
        whitepapers={whitepapers}
        selectedIds={selectedIds}
        labels={formLabels}
      />
    </>
  );
}
