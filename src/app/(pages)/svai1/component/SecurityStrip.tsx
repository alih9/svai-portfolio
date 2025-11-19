import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

// Mindmap — Compliance/Security badges row
const SecurityStrip = () => {
  return (
    <section className="bg-white py-6 border-y border-neutral-200">
      <div className="container">
        <div className="flex flex-wrap items-center gap-x-7.5 gap-y-3 text-sm text-neutral-700">
          <div className="flex items-center gap-2">
            <span role="img" aria-label="shield">
              🛡
            </span>
            GDPR Compliant
          </div>
          <div className="flex items-center gap-2">
            <span role="img" aria-label="lock">
              🔐
            </span>
            RBAC &amp; Zero-Trust Security
          </div>
          <div className="flex items-center gap-2">
            <span role="img" aria-label="disk">
              💾
            </span>
            End-to-End Encryption
          </div>
          <div className="flex items-center gap-2">
            <IconifyIconClient icon="tabler:cloud" className="size-4" />
            Hybrid Deployments
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityStrip;
