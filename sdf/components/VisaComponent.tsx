import React from 'react';

const VisaComponent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 py-12">
      <div className="mt-8">
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-center mb-8">SKILLED INDEPENDENT VISA</h2>
          <p className="mb-6">
            The Skilled Independent Visa Subclass 189 is a permanent visa which allows skilled workers to live in Australia. This visa does not require sponsorship from an employer or state/territory Government, however skilled workers must be both qualified and experienced to fill Australia’s current skill shortages. To be eligible for this visa, applicants must be skilled in an occupation on the Skilled Independent Visa Occupation List (SOL).
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">HOW DO I QUALIFY FOR A SUBCLASS 189 VISA?</h3>
          <ul className="list-decimal list-inside mb-6">
            <li>Be under 45 years of age</li>
            <li>Nominate an occupation that is included on the relevant Occupation List (MLTSSL)</li>
            <li>Have your skills assessed by the appropriate Australian skills assessing authority as suitable for your nominated occupation</li>
            <li>Have competent English</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">WHAT THIS VISA ALLOWS YOU TO DO:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Live and work anywhere in Australia indefinitely</li>
            <li>Study in Australia, with access to subsidised education</li>
            <li>Access to Medicare</li>
            <li>Apply for Australian citizenship (after meeting appropriate requirements)</li>
            <li>Be able to sponsor family members for certain visas</li>
            <li>Apply for social security payments</li>
            <li>Travel in and out of Australia for 5 years</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">HOW DO I APPLY FOR A SUBCLASS 189 VISA?</h3>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">STAGE 1: INITIAL ELIGIBILITY:</h4>
            <p className="mb-4">
              The first step that we will take is to conduct an initial assessment of your eligibility for this visa. This involves reviewing your qualifications, work experience, English language and other circumstances, to establish whether or not you are likely to meet the relevant requirements.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">STAGE 2: SKILLS ASSESSMENT</h4>
            <p className="mb-4">
              Should our initial assessment indicate that you are eligible for a positive skills assessment and EOI, we will prepare your skills assessment application.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">STAGE 3: EXPRESSION OF INTEREST (EOI)</h4>
            <p className="mb-4">
              Once you have received a positive skills assessment from the skills assessing authority, we will prepare and lodge your EOI.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">STAGE 4: VISA APPLICATION</h4>
            <p className="mb-4">
              Once the Department of Immigration has invited you to apply for this visa, we will prepare and lodge your visa application.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">OTHER REQUIREMENTS</h3>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">HEALTH</h4>
            <p className="mb-4">
              Main applicant and all of the family members must meet health requirements.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">CHARACTER</h4>
            <p className="mb-4">
              You must be of good character.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">LOCATION</h4>
            <p className="mb-4">
              You can be in or outside Australia when you apply for the visa and when a decision is made.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">DEBTS</h4>
            <p className="mb-4">
              You must have repaid, or have arranged to repay, any outstanding debts to the Australian government.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">VISA CANCELLED OR REFUSED</h4>
            <p className="mb-4">
              You might not be eligible to apply for this visa if you have had a visa cancelled or refused while you were in Australia.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">PROCESSING TIME</h3>
          <p className="mb-4">
            6-12 Months. PLEASE NOTE: The actual time taken by the Department of Immigration to approve an application and grant a visa varies depending upon an applicant’s particular circumstances, and the amount of supporting information that the Department requires.
          </p>
        </section>
      </div>
    </div>
  );
}

export default VisaComponent;
