// Issac Medical Core Engine
// Powered by Atlas Medical Intelligence

class IssacApp {
  constructor() {
    this.activePanel = 'dashboard';
    this.currentTopic = 'Myocardial Infarction';
    this.currentSubject = 'Cardiology';
    this.atlasIdle = true;
    
    // Accordion expand states
    this.expandedSubtopics = {};

    // 3-layer Medical Roadmap Database
    this.roadmapDb = {
      'Cardiology': {
        title: 'Cardiology Roadmap',
        subtopics: [
          {
            name: 'Heart Anatomy',
            concepts: [
              { name: 'Chambers', desc: 'Atria and ventricles structure and thick myocardial walls.', topic: 'Heart Anatomy' },
              { name: 'Valves', desc: 'Atrioventricular (Tricuspid/Mitral) and Semilunar (Aortic/Pulmonary) valves.', topic: 'Heart Anatomy' },
              { name: 'Blood Supply', desc: 'Coronary circulation, LAD, Circumflex, and Right Coronary arteries.', topic: 'Myocardial Infarction' },
              { name: 'Conduction System', desc: 'SA node, AV node, Bundle of His, and Purkinje fibers pathways.', topic: 'Heart Anatomy' }
            ]
          },
          {
            name: 'Cardiac Physiology',
            concepts: [
              { name: 'Cardiac Cycle', desc: 'Systole contraction and diastole relaxation pressure changes.', topic: 'Heart Anatomy' },
              { name: 'Hemodynamics', desc: 'Cardiac output, stroke volume, preload, afterload, and compliance.', topic: 'Heart Anatomy' },
              { name: 'Action Potentials', desc: 'Pacemaker vs myocardial muscle cells depolarization phases.', topic: 'Heart Anatomy' }
            ]
          },
          {
            name: 'ECG Interpretation',
            concepts: [
              { name: 'ECG Waves', desc: 'P wave (atrial depolar), QRS complex (ventricular depolar), T wave (repolar).', topic: 'Myocardial Infarction' },
              { name: 'ST-Segment Deviation', desc: 'ST elevation (transmural injury) vs ST depression (subendocardial).', topic: 'Hypertension' },
              { name: 'Arrhythmias', desc: 'Fibrillation, heart blocks, tachycardias, and premature beats.', topic: 'Myocardial Infarction' }
            ]
          },
          {
            name: 'Coronary Artery Disease',
            concepts: [
              { name: 'Atherosclerosis', desc: 'Plaque formation, lipid accumulation, and endothelial damage.', topic: 'Myocardial Infarction' },
              { name: 'Stable Angina', desc: 'Reversible exertional ischemia without necrosis or biomarker lift.', topic: 'Myocardial Infarction' },
              { name: 'Acute Coronary Syndromes', desc: 'Unstable angina, NSTEMI, and STEMI myocardial ischemia.', topic: 'Myocardial Infarction' }
            ]
          }
        ]
      },
      'Neurology': {
        title: 'Neurology Roadmap',
        subtopics: [
          {
            name: 'Brain Anatomy',
            concepts: [
              { name: 'Cerebral Hemispheres', desc: 'Frontal, parietal, temporal, and occipital lobes functional zones.', topic: 'Cranial Nerves' },
              { name: 'Cranial Nerves', desc: 'Olfactory (I) to Hypoglossal (XII) exit courses and testing.', topic: 'Cranial Nerves' },
              { name: 'Cerebral Circulation', desc: 'Circle of Willis, MCA, ACA, and PCA vascular territories.', topic: 'Cerebral Stroke' }
            ]
          },
          {
            name: 'Cerebrovascular Disease',
            concepts: [
              { name: 'Ischemic Stroke', desc: 'Thrombotic or embolic artery occlusion and penumbra survival.', topic: 'Cerebral Stroke' },
              { name: 'Hemorrhagic Stroke', desc: 'Aneurysm rupture or hypertensive intracerebral bleed signs.', topic: 'Cerebral Stroke' },
              { name: 'Thrombolysis (tPA)', desc: 'Reperfusion windows (4.5 hr) and strict contraindications.', topic: 'Cerebral Stroke' }
            ]
          }
        ]
      },
      'Endocrinology': {
        title: 'Endocrinology Roadmap',
        subtopics: [
          {
            name: 'Pancreatic Hormones',
            concepts: [
              { name: 'Insulin Physiology', desc: 'Beta-cell secretion, GLUT4 receptors, and glucose uptake.', topic: 'Diabetes Mellitus' },
              { name: 'Glucagon Mechanism', desc: 'Alpha-cell response, glycogenolysis, and gluconeogenesis.', topic: 'Diabetes Mellitus' }
            ]
          },
          {
            name: 'Diabetes Mellitus',
            concepts: [
              { name: 'Type 1 Diabetes', desc: 'Autoimmune beta-cell destruction and absolute insulin deficiency.', topic: 'Diabetes Mellitus' },
              { name: 'Type 2 Diabetes', desc: 'Insulin resistance, obesity associations, and progressive failure.', topic: 'Diabetes Mellitus' },
              { name: 'Acute Complications', desc: 'DKA (ketoacidosis) vs HHS (hyperosmolar state) treatments.', topic: 'Diabetes Mellitus' }
            ]
          }
        ]
      },
      'Pulmonology': {
        title: 'Pulmonology Roadmap',
        subtopics: [
          {
            name: 'Respiratory Anatomy',
            concepts: [
              { name: 'Airway Branching', desc: 'Trachea, bronchi, bronchioles, and alveoli surface areas.', topic: 'Asthma' },
              { name: 'Alveolar Membrane', desc: 'Type I vs Type II pneumocytes and surfactant tension control.', topic: 'Asthma' }
            ]
          },
          {
            name: 'Obstructive Lung Diseases',
            concepts: [
              { name: 'Asthma Pathology', desc: 'Reversible bronchospasm, eosinophil inflammation, and mucus plugs.', topic: 'Asthma' },
              { name: 'COPD Mechanics', desc: 'Emphysema alveolar destruction and chronic bronchitis cough.', topic: 'Asthma' },
              { name: 'Spirometry Diagnostics', desc: 'Reduced FEV1/FVC ratio (< 0.70) and bronchodilator checks.', topic: 'Asthma' }
            ]
          }
        ]
      }
    };

    // User progress states
    this.userXP = 1250;
    this.userStreak = 12;
    this.userTargetGoal = 200;
    this.userStudyTrack = 'USMLE Step 1';
    this.quizzesCompleted = 2;
    this.casesSolved = 1;
    this.hoursStudied = '14h 30m';
    this.activityLogs = [
      { type: '🫀', title: 'Solved Myocardial Infarction Case', time: '1 hour ago', desc: 'Resolved ST-elevation ECG signs and selected thrombolytics pathway (+20 XP).' },
      { type: '🧠', title: 'Reviewed Cerebral Stroke Flowchart', time: 'Yesterday', desc: 'Studied tPA time-window inclusion criteria and hemorrhagic diffs.' },
      { type: '💊', title: 'Completed Beta Blockers Quiz', time: '2 days ago', desc: 'Passed receptors pharmacology MCQ set with 80% score (+10 XP).' }
    ];

    // Bookmarked topics list
    this.bookmarkedTopics = ['Myocardial Infarction', 'Beta Blockers'];

    // 29 MBBS Subjects Database
    this.subjectsDb = [
      // Pre-clinical
      { id: 'anatomy', name: 'Anatomy', phase: 'pre-clinical', desc: 'Gross human anatomy, osteology, histology, neuroanatomy, and embryology.', count: 8 },
      { id: 'physiology', name: 'Physiology', phase: 'pre-clinical', desc: 'Systemic cellular organ functions, cardiodynamics, and homeostatic loops.', count: 6 },
      { id: 'biochemistry', name: 'Biochemistry', phase: 'pre-clinical', desc: 'Enzymology, metabolism pathways, genetic codes, and clinical chemistry.', count: 5 },
      // Para-clinical
      { id: 'pathology', name: 'Pathology', phase: 'para-clinical', desc: 'Cell injury, immunopathology, hematology, and organ system neoplasms.', count: 9 },
      { id: 'pharmacology', name: 'Pharmacology', phase: 'para-clinical', desc: 'Pharmacokinetics, pharmacodynamics, autonomic drugs, and therapeutics.', count: 7 },
      { id: 'microbiology', name: 'Microbiology', phase: 'para-clinical', desc: 'Bacteriology, virology, immunology, mycology, and parasite vectors.', count: 6 },
      { id: 'forensic', name: 'Forensic Medicine', phase: 'para-clinical', desc: 'Medical jurisprudence, postmortem changes, toxicology, and trauma laws.', count: 4 },
      { id: 'community', name: 'Community Medicine', phase: 'para-clinical', desc: 'Epidemiology, biostatistics, public health projects, and vaccine schedules.', count: 5 },
      // Clinical
      { id: 'cardiology', name: 'Cardiology', phase: 'clinical', desc: 'Coronary artery disease, valve defects, dysrhythmias, and ECG analyses.', count: 12 },
      { id: 'neurology', name: 'Neurology', phase: 'clinical', desc: 'Stroke management, neurodegenerative diseases, epilepsy, and localizing lesions.', count: 10 },
      { id: 'general-medicine', name: 'General Medicine', phase: 'clinical', desc: 'Infectious diseases, endocrinology, nephrology, and systemic therapeutics.', count: 18 },
      { id: 'general-surgery', name: 'General Surgery', phase: 'clinical', desc: 'Acute abdomen triage, wound healing, hernia repairs, and surgical preps.', count: 15 },
      { id: 'pediatrics', name: 'Pediatrics', phase: 'clinical', desc: 'Developmental milestones, neonatal care, congenital disorders, and childhood infections.', count: 8 },
      { id: 'obgyn', name: 'Obstetrics & Gynecology', phase: 'clinical', desc: 'Antenatal care, labor management, menstrual disorders, and gynecological cancers.', count: 11 },
      { id: 'orthopedics', name: 'Orthopedics', phase: 'clinical', desc: 'Bone fractures, dislocations, osteoarthritis, and joint replacement workflows.', count: 6 },
      { id: 'ent', name: 'ENT', phase: 'clinical', desc: 'Otitis media, sinusitis, tonsillectomy, and hearing loss differentiations.', count: 5 },
      { id: 'ophthalmology', name: 'Ophthalmology', phase: 'clinical', desc: 'Glaucoma, cataracts, refractive errors, retinal detachments, and uveitis.', count: 6 },
      { id: 'dermatology', name: 'Dermatology', phase: 'clinical', desc: 'Psoriasis, eczema, melanoma, fungal rashes, and systemic skin markers.', count: 4 },
      { id: 'psychiatry', name: 'Psychiatry', phase: 'clinical', desc: 'Schizophrenia, major depression, bipolar syndromes, and psychopharmacology.', count: 5 },
      { id: 'radiology', name: 'Radiology', phase: 'clinical', desc: 'CT scans, MRI sequences, chest X-rays, and contrast agents safety.', count: 4 },
      { id: 'anesthesiology', name: 'Anesthesiology', phase: 'clinical', desc: 'General vs spinal anesthesia, airway intubation, and critical drug calculations.', count: 3 },
      { id: 'emergency-medicine', name: 'Emergency Medicine', phase: 'clinical', desc: 'Trauma resuscitations, shock classifications, poisonings, and anaphylaxis.', count: 6 },
      { id: 'critical-care', name: 'Critical Care', phase: 'clinical', desc: 'Sepsis protocols, mechanical ventilation settings, and arterial blood gas analysis.', count: 5 },
      { id: 'gastroenterology', name: 'Gastroenterology', phase: 'clinical', desc: 'Peptic ulcer disease, liver cirrhosis, inflammatory bowel diseases.', count: 6 },
      { id: 'endocrinology', name: 'Endocrinology', phase: 'clinical', desc: 'Diabetes mellitus, thyroid disorders, pituitary adenomas.', count: 5 },
      { id: 'nephrology', name: 'Nephrology', phase: 'clinical', desc: 'Acute kidney injury, chronic kidney disease, glomerulonephritis.', count: 5 },
      { id: 'pulmonology', name: 'Pulmonology', phase: 'clinical', desc: 'Asthma, COPD, pulmonary embolism, interstitial lung diseases.', count: 5 },
      { id: 'oncology', name: 'Oncology', phase: 'clinical', desc: 'Chemotherapy principles, radiation therapy, tumor staging.', count: 4 },
      { id: 'rheumatology', name: 'Rheumatology', phase: 'clinical', desc: 'Rheumatoid arthritis, systemic lupus erythematosus, gout.', count: 4 }
    ];

    // Subject to Topic Mapping
    this.subjectTopicsDb = {
      'Cardiology': ['Myocardial Infarction', 'Hypertension', 'Heart Anatomy'],
      'Neurology': ['Cerebral Stroke', 'Cranial Nerves'],
      'Pharmacology': ['Beta Blockers'],
      'General Surgery': ['Acute Appendicitis'],
      'Endocrinology': ['Diabetes Mellitus'],
      'Pulmonology': ['Asthma'],
      'Nephrology': ['Nephron'],
      'Gastroenterology': ['Hepatic Anatomy']
    };

    // Static Medical Topics Database (contains all 9 tabs data)
    this.topicsDb = {
      'Hypertension': {
        title: 'Hypertension',
        subject: 'Cardiology',
        overview: `<p><strong>Hypertension</strong> is a chronic medical condition characterized by persistently elevated systemic arterial blood pressure. It is classified into Primary (Essential) Hypertension, which accounts for 90-95% of cases and has no identifiable secondary cause, and Secondary Hypertension, which results from underlying renal, vascular, or endocrine conditions.</p>
        <p>Persistent high blood pressure causes endothelial shear stress, accelerating atherosclerosis and leading to target organ damage, including coronary artery disease, stroke, chronic kidney disease, and retinopathy. Diagnosis is established when blood pressure measurements consistently meet or exceed 130/80 mmHg across multiple clinical encounters.</p>`,
        pearl: 'Thiazide diuretics (e.g., Chlorthalidone) can cause hyperglycemia, hyperlipidemia, hyperuricemia, and hypercalcemia. For patients with diabetes or chronic kidney disease, ACE inhibitors or ARBs are first-line for renal protective properties.',
        takeaways: [
          'Primary hypertension is multifactorial, linked to genetics, sodium intake, and obesity.',
          'Stage 1 Hypertension is defined as 130-139 / 80-89 mmHg; Stage 2 is >= 140 / 90 mmHg.',
          'Lifestyle modifications (DASH diet, exercise, weight loss) are recommended for all patients.',
          'First-line antihypertensive classes include ACE inhibitors, ARBs, Calcium Channel Blockers, and Thiazides.'
        ],
        mnemonic: {
          phrase: 'A-B-C-D of BP Management',
          explain: 'A: ACE inhibitors / ARBs (younger patients), B: Beta-blockers (not first line unless compelling indications), C: Calcium Channel Blockers (older/black patients), D: Diuretics (thiazides).'
        },
        accordions: [
          {
            title: 'Diagnostic Criteria & Classifications',
            content: `<p>Blood pressure categories defined by ACC/AHA guidelines:</p>
            <ul>
              <li><strong>Normal:</strong> &lt; 120 / 80 mmHg</li>
              <li><strong>Elevated:</strong> 120-129 / &lt; 80 mmHg</li>
              <li><strong>Stage 1 Hypertension:</strong> 130-139 or 80-89 mmHg</li>
              <li><strong>Stage 2 Hypertension:</strong> &gt;= 140 or &gt;= 90 mmHg</li>
            </ul>
            <p>A diagnosis requires at least two separate readings on two or more clinical encounters, or ambulatory blood pressure monitoring.</p>`
          },
          {
            title: 'Pathophysiology & Target Organ Damage',
            content: `<p>Hypertension increases left ventricular afterload, leading to left ventricular hypertrophy (LVH). It also promotes arterial wall thickening and hyaline arteriolosclerosis, compromising perfusion to key organs.</p>
            <p>Target organ complications include stroke, myocardial infarction, congestive heart failure, nephrosclerosis (renal failure), and aortic dissection.</p>`
          },
          {
            title: 'First-Line Pharmacotherapy',
            content: `<p>Four classes of drugs are recommended as first-line agents:</p>
            <ul>
              <li><strong>ACE Inhibitors (e.g., Lisinopril):</strong> Blocks angiotensin II synthesis; renal protective in diabetes.</li>
              <li><strong>Angiotensin Receptor Blockers (ARBs, e.g., Losartan):</strong> Blocks AT1 receptors.</li>
              <li><strong>Calcium Channel Blockers (e.g., Amlodipine):</strong> Vasodilates peripheral arteries.</li>
              <li><strong>Thiazide Diuretics (e.g., Hydrochlorothiazide):</strong> Promotes renal sodium excretion.</li>
            </ul>`
          }
        ],
        caseSimulation: {
          intro: 'A 52-year-old male with a BMI of 31 and history of type 2 diabetes presents for a lifestyle and BP checkup. His blood pressure today is 142/88 mmHg. A repeat reading is 140/86 mmHg.',
          steps: [
            {
              doctor: 'Welcome Doctor. This is the second visit where the patient\'s blood pressure is elevated. What is your diagnostic assessment?',
              options: [
                { text: 'Diagnose Stage 2 Hypertension based on systolic BP >= 140 mmHg', correct: true, feedback: 'Correct! A systolic BP of 140 mmHg or greater on multiple occasions defines Stage 2 Hypertension.' },
                { text: 'Diagnose Stage 1 Hypertension', correct: false, feedback: 'Incorrect. Systolic >= 140 mmHg is Stage 2, even if diastolic is in the Stage 1 range.' },
                { text: 'Wait for 3 months before diagnosing', correct: false, feedback: 'Incorrect. The patient has comorbid type 2 diabetes, requiring prompt intervention.' }
              ]
            },
            {
              doctor: 'Given the patient\'s concurrent Type 2 Diabetes, which antihypertensive class is the most appropriate first-line choice?',
              options: [
                { text: 'ACE Inhibitor (e.g., Lisinopril)', correct: true, feedback: 'Correct! ACE inhibitors (or ARBs) are renal protective in diabetic patients by dilating the efferent arteriole, reducing glomerular pressure.' },
                { text: 'Beta-Blocker (e.g., Metoprolol)', correct: false, feedback: 'Incorrect. Beta-blockers are not first-line for hypertension unless there is an active cardiac indication.' },
                { text: 'Loop Diuretic (e.g., Furosemide)', correct: false, feedback: 'Incorrect. Loop diuretics are reserved for fluid overload in heart failure/CKD, not primary hypertension.' }
              ]
            }
          ]
        },
        diagramLayers: ['Renal Blood Flow Control', 'Vascular Arterioles Contraction', 'Heart Pacemaker Depolarization'],
        diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="120" fill="none" stroke="var(--primary)" stroke-dasharray="4 4" stroke-width="1.5"/>
          <g id="layer-vascular-arterioles-contraction" class="svg-organ-path">
            <path d="M 120 180 Q 200 120 280 180" stroke="var(--secondary)" stroke-width="6" fill="none"/>
            <text x="200" y="160" fill="var(--text-secondary)" font-size="8" text-anchor="middle">Arteriolar Vasoconstriction</text>
          </g>
          <g id="layer-renal-blood-flow-control" class="svg-organ-path">
            <rect x="150" y="220" width="100" height="50" rx="8" fill="rgba(255,255,255,0.02)" stroke="var(--accent)" stroke-width="2"/>
            <text x="200" y="248" fill="var(--text-secondary)" font-size="8" text-anchor="middle">Renin-Angiotensin System</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Target Organs', 'Hypertension leads to heart hypertrophy, stroke, and kidney damage.')">
            <circle cx="200" cy="200" r="5"/>
            <text x="200" y="190" class="svg-hotspottext" text-anchor="middle">End-Organ Damage</text>
          </g>
        </svg>`,
        flowchart: [
          { num: 1, title: 'Risk Factors Identification', desc: 'Identify metabolic, genetic, and lifestyle factors.', details: 'Assess patient for risk factors like family history, high sodium diet, obesity, sedentary lifestyle, and alcohol intake.', q: 'Which diet is specifically recommended to lower blood pressure?', opts: ['Keto Diet', 'DASH Diet', 'Paleo Diet', 'Low-carb Diet'], ans: 1 },
          { num: 2, title: 'Screening Protocols', desc: 'Measure blood pressure across encounters.', details: 'Perform routine clinic measurements. If elevated, consider ambulatory blood pressure monitoring to rule out white-coat hypertension.', q: 'How many separate encounters are typically required to diagnose hypertension?', opts: ['One visit', 'Two or more visits', 'Five visits', 'Daily visits for a month'], ans: 1 },
          { num: 3, title: 'Diagnosis Confirmation', desc: 'Confirm persistent elevations >= 130/80 mmHg.', details: 'Confirm that systolic BP is consistently >= 130 mmHg or diastolic BP is consistently >= 80 mmHg.', q: 'Which reading defines Stage 1 Hypertension under ACC/AHA guidelines?', opts: ['120-129 / <80 mmHg', '130-139 / 80-89 mmHg', '>=140 / >=90 mmHg', '>=180 / >=120 mmHg'], ans: 1 },
          { num: 4, title: 'Classification Stage', desc: 'Differentiate Stage 1 and Stage 2 pathways.', details: 'Stage 1 (130-139/80-89) is managed with lifestyle changes plus 1 medication if high cardiovascular risk. Stage 2 (>=140/90) requires lifestyle plus 2 medications.', q: 'What is the diagnostic category for a BP of 144/82 mmHg?', opts: ['Elevated', 'Stage 1 Hypertension', 'Stage 2 Hypertension', 'Hypertensive Crisis'], ans: 2 },
          { num: 5, title: 'Management & Therapy', desc: 'Initiate lifestyle changes and first-line drugs.', details: 'Prescribe DASH diet and exercise. Start first-line medications (ACE inhibitors, ARBs, CCBs, or Thiazides). Use ACEi/ARBs in diabetes/CKD.', q: 'Which class is preferred for a diabetic patient with hypertension?', opts: ['Beta-blockers', 'ACE inhibitors', 'Loop diuretics', 'Alpha-blockers'], ans: 1 },
          { num: 6, title: 'Follow-Up Monitoring', desc: 'Evaluate blood pressure control and side effects.', details: 'Schedule follow-up visits monthly until target BP (<130/80 mmHg) is achieved, then check every 3-6 months. Monitor kidney function and electrolytes.', q: 'Which electrolyte is critical to monitor when starting an ACE inhibitor?', opts: ['Sodium', 'Calcium', 'Potassium', 'Magnesium'], ans: 2 }
        ],
        knowledgeMap: [
          { id: 'center', label: 'Hypertension', x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 75 },
          { id: 'node1', label: 'Vasoconstriction', x: 230, y: 80, size: 28, color: 'var(--secondary)', type: 'dep', progress: 85 },
          { id: 'node2', label: 'Endothelial Damage', x: 380, y: 140, size: 28, color: 'var(--accent)', type: 'dep', progress: 60 },
          { id: 'node3', label: 'ACE Inhibitors', x: 360, y: 280, size: 28, color: 'var(--success)', type: 'dep', progress: 90 },
          { id: 'node4', label: 'Stroke Risk', x: 130, y: 280, size: 28, color: 'var(--warning)', type: 'dep', progress: 70 }
        ],
        flashcards: [
          { q: 'What is the blood pressure threshold for Stage 2 Hypertension?', a: 'Systolic blood pressure >= 140 mmHg OR diastolic blood pressure >= 90 mmHg.' },
          { q: 'Why are ACE inhibitors preferred in patients with diabetes?', a: 'They dilate the efferent arteriole in the kidney, decreasing glomerular filtration pressure, which slows the progression of diabetic nephropathy.' },
          { q: 'What is the definition of hypertensive urgency vs emergency?', a: 'Both involve blood pressure > 180/120 mmHg, but hypertensive emergency is characterized by acute, ongoing target organ damage (e.g. encephalopathy, MI, stroke).' }
        ],
        quiz: [
          {
            q: 'A 45-year-old female presents with persistent BP readings averaging 136/84 mmHg. She has no other chronic diseases. What is the initial treatment strategy?',
            opts: ['Lifestyle modification alone for 3-6 months', 'Start two antihypertensive drugs immediately', 'Initiate high-dose Beta blocker', 'Schedule renal artery stenosis surgery'],
            ans: 0,
            explain: 'Under ACC/AHA guidelines, Stage 1 Hypertension (130-139 / 80-89) in patients with low ASCVD risk (<10%) is managed with lifestyle changes alone initially, re-assessing in 3-6 months.'
          }
        ],
        viva: [
          { q: 'Explain the mechanism of action of Thiazide diuretics in treating hypertension.', a: 'Initially, thiazides decrease blood pressure by inhibiting the Na+/Cl- cotransporter in the distal convoluted tubule, increasing sodium excretion and reducing blood volume. Long-term, they promote direct vasodilation of peripheral blood vessels, lowering vascular resistance.' }
        ]
      },
      'Myocardial Infarction': {
        title: 'Myocardial Infarction',
        subject: 'Cardiology',
        overview: `<p><strong>Myocardial Infarction (MI)</strong>, colloquially known as a heart attack, occurs when myocardial ischemia—characterized by a critical imbalance between myocardial oxygen supply and demand—escalates to irreversible cellular necrosis. This is most frequently precipitated by the acute rupture of an unstable atherosclerotic plaque in a coronary artery, triggering platelet activation, thrombosis, and complete luminal occlusion.</p>
        <p>Necrosis initiates within 20 minutes of severe ischemia, progressing from the subendocardium to the subepicardium in a wavefront pattern. Electrocardiographic patterns define the clinical pathways: <strong>STEMI</strong> (ST-Elevation MI) requires immediate reperfusion, whereas <strong>NSTEMI</strong> (Non-ST-Elevation MI) is managed via antiplatelets and risk-stratified invasive timelines.</p>`,
        pearl: 'ST elevation in leads V1-V4 indicates anterior wall ischemia localized to the Left Anterior Descending (LAD) coronary artery. Right ventricular infarction requires avoiding venodilators like nitroglycerin, as cardiac output is preload-dependent.',
        takeaways: [
          'Acute occlusion triggers subendocardial ischemia within minutes.',
          'Cardiac troponins I and T are highly sensitive biomarkers of necrosis.',
          'STEMI requires primary percutaneous coronary intervention (PCI) within 90 minutes door-to-balloon time.',
          'Post-MI complications include arrhythmias, ventricular septal rupture, and cardiogenic shock.'
        ],
        mnemonic: {
          phrase: 'MONA Meets LCP',
          explain: 'Mnemonic for acute management: Morphine, Oxygen, Nitroglycerin, Aspirin. Plus long-term Beta Blockers, Clopidogrel, and Statins.'
        },
        accordions: [
          {
            title: 'Clinical Presentation & Symptoms',
            content: `<p>Patients typically present with severe, crushing substernal chest pain ('heart attack') radiating to the left arm, neck, or jaw. Pain is often accompanied by diaphoresis (sweating), dyspnea, nausea, and anxiety.</p>
            <p>Atypical presentations (e.g., shortness of breath, epigastric pain, or silent ischemia) are common in women, elderly patients, and individuals with diabetes mellitus due to autonomic neuropathy.</p>`
          },
          {
            title: 'Diagnostic Guidelines & Biomarkers',
            content: `<p>A 12-lead ECG must be performed and interpreted within 10 minutes of presentation. ST-segment elevation in two or more contiguous leads confirms STEMI. Reciprocal depressions are often seen in opposing leads.</p>
            <p>Cardiac troponins I and T are the most sensitive and specific biomarkers of myocardial necrosis, rising within 2-4 hours and remaining elevated for up to 10-14 days. CK-MB is useful for detecting re-infarction due to its shorter half-life.</p>`
          },
          {
            title: 'Immediate & Secondary Management',
            content: `<p><strong>Immediate:</strong> Sublingual Nitroglycerin (avoid in right ventricular infarction), Aspirin (325mg loading dose), and primary percutaneous coronary intervention (PCI) within 90 minutes door-to-balloon time.</p>
            <p><strong>Secondary Prevention:</strong> Dual Antiplatelet Therapy (DAPT) with Aspirin and a P2Y12 inhibitor (e.g., Clopidogrel) for 12 months, Beta-blockers, ACE inhibitors/ARBs, and high-intensity Statins.</p>`
          }
        ],
        caseSimulation: {
          scenarios: [
            {
              id: 'stemi',
              title: 'Typical STEMI Presentation',
              difficulty: 'Beginner',
              intro: 'A 58-year-old male presents to the Emergency Department with crushing substernal chest pain radiating to his left arm for 45 minutes, accompanied by diaphoresis and nausea.',
              patient: {
                id: 'MI-STEMI-901',
                demographics: '58-year-old Male',
                duration: '45 minutes',
                complaint: 'Crushing substernal chest pain radiating to left arm',
                vitals: 'BP: 135/85 mmHg | HR: 98 bpm | RR: 20/min | Temp: 37.1°C | SpO2: 95%'
              },
              differentials: {
                chips: ['Acute STEMI', 'Aortic Dissection', 'Acute Pericarditis', 'GERD'],
                reasoning: 'Substernal crushing pain with diaphoresis is classic for acute coronary syndrome. Aortic dissection must be ruled out (symmetric pulses needed); pericarditis typically varies with position.'
              },
              investigations: {
                labs: 'Cardiac Troponins I/T, BMP, CBC, Coagulation Profile',
                imaging: '12-Lead ECG, Portable Chest X-ray',
                findings: 'ECG reveals 3mm ST-segment elevation in leads V2-V4. Troponin results pending. Chest X-ray shows normal mediastinum.'
              },
              management: {
                options: 'Primary PCI of Left Anterior Descending (LAD) artery, loading dose Aspirin (325mg) & Clopidogrel (600mg), IV Heparin, Sublingual Nitroglycerin.',
                pearl: 'Door-to-balloon time should be <90 minutes. Beta-blockers, ACE inhibitors, and high-intensity statins must be initiated within 24 hours.'
              },
              aiInsights: {
                explanation: 'Anterior STEMI is most commonly caused by rupture of an atherosclerotic plaque in the LAD. Transmural necrosis begins within 20 minutes of occlusion. Prompt mechanical reperfusion prevents progressive myocardial tissue loss and cardiogenic shock.',
                modules: [
                  { name: 'Anteroseptal Wall MI Anatomy', panel: 'topic-learning' },
                  { name: 'Troponin Kinetics', panel: 'topic-learning' }
                ]
              },
              steps: [
                {
                  doctor: 'Welcome Doctor. The patient is distressed. What is your immediate diagnostic step?',
                  options: [
                    { text: 'Order a 12-Lead Electrocardiogram (ECG)', correct: true, feedback: 'Correct! An ECG must be performed and interpreted within 10 minutes of presentation.' },
                    { text: 'Wait for serum troponin results', correct: false, feedback: 'Incorrect. Troponins take 2-4 hours to rise; waiting delays critical reperfusion.' },
                    { text: 'Perform a chest CT scan', correct: false, feedback: 'Incorrect. CT scan is not indicated unless evaluating aortic dissection.' }
                  ]
                },
                {
                  doctor: 'ECG reveals 3mm ST-segment elevation in leads V2-V4. The diagnosis is confirmed as an acute anteroseptal STEMI. What is your immediate therapeutic path?',
                  options: [
                    { text: 'Prepare the patient for urgent Primary PCI', correct: true, feedback: 'Correct! Primary PCI is the gold standard reperfusion therapy for STEMI within 90 minutes.' },
                    { text: 'Administer oral antacids and discharge', correct: false, feedback: 'Incorrect. This is a life-threatening MI; discharge is fatal.' },
                    { text: 'Start high-dose heparin alone and admit to general ward', correct: false, feedback: 'Incorrect. STEMI requires active artery opening (PCI or thrombolytics), not just anticoagulation.' }
                  ]
                },
                {
                  doctor: 'The patient successfully underwent PCI with stent placement in the LAD. What discharge medications must you prescribe for secondary prevention?',
                  options: [
                    { text: 'Aspirin, Clopidogrel, Beta Blocker, Statin, and ACE Inhibitor', correct: true, feedback: 'Perfect! This dual-antiplatelet plus cardioprotective regimen is essential to prevent re-infarction.' },
                    { text: 'Aspirin alone and prn nitroglycerin', correct: false, feedback: 'Incorrect. Under-treatment leads to high mortality rates within 1 year.' }
                  ]
                }
              ]
            },
            {
              id: 'silent_mi',
              title: 'Silent MI',
              difficulty: 'Intermediate',
              intro: 'A 62-year-old female with long-standing Type 2 Diabetes presents with acute onset of unexplained dyspnea, extreme fatigue, and mild epigastric discomfort. She denies chest pain.',
              patient: {
                id: 'MI-SILENT-902',
                demographics: '62-year-old Female',
                duration: '2 hours',
                complaint: 'Acute onset of unexplained dyspnea, fatigue, and mild epigastric discomfort',
                vitals: 'BP: 128/76 mmHg | HR: 88 bpm | RR: 22/min | Temp: 36.8°C | SpO2: 92%'
              },
              differentials: {
                chips: ['NSTEMI', 'Gastroenteritis / GERD', 'Atypical Angina', 'Pulmonary Embolism'],
                reasoning: 'Diabetic patients often present with "anginal equivalents" such as dyspnea, nausea, or epigastric pain due to autonomic neuropathy masking typical visceral chest pain.'
              },
              investigations: {
                labs: 'Elevated Cardiac Troponins I/T (0.45 ng/mL), BMP, CBC',
                imaging: '12-Lead ECG, Chest X-ray',
                findings: 'ECG shows ST-segment depression in leads II, III, and aVF (inferior ischemia). Troponin is positive. Chest X-ray shows no acute infiltrate.'
              },
              management: {
                options: 'Dual antiplatelets (Aspirin & Ticagrelor), anticoagulation (Low Molecular Weight Heparin), Nitroglycerin drip, and risk-stratified coronary angiogram within 24 hours.',
                pearl: 'Always perform an ECG on any diabetic patient presenting with unexplained dyspnea or epigastric discomfort.'
              },
              aiInsights: {
                explanation: 'NSTEMI involves subendocardial ischemia rather than complete transmural occlusion. Long-standing diabetes impairs visceral pain pathways (sensory afferents) in the heart, leading to silent or atypical myocardial ischemia presentations.',
                modules: [
                  { name: 'Autonomic Neuropathy Mechanisms', panel: 'topic-learning' },
                  { name: 'Subendocardial Ischemia ECG', panel: 'topic-learning' }
                ]
              },
              steps: [
                {
                  doctor: 'Welcome Doctor. The patient denies chest pain but has severe dyspnea and diabetic history. What is your initial action?',
                  options: [
                    { text: 'Obtain a 12-lead ECG and check bedside glucose', correct: true, feedback: 'Correct! Autonomic neuropathy in diabetic patients frequently masks typical chest pain, presenting as dyspnea or silent ischemia.' },
                    { text: 'Prescribe antacids for gastroesophageal reflux', correct: false, feedback: 'Incorrect. Epigastric discomfort can be atypical ACS; ruling out cardiac causes is top priority.' },
                    { text: 'Discharge with reassurance', correct: false, feedback: 'Incorrect. This could be a critical cardiovascular event.' }
                  ]
                },
                {
                  doctor: 'ECG shows ST-segment depression in leads II, III, and aVF, and cardiac troponins are elevated. The diagnosis is NSTEMI. What is the appropriate initial management?',
                  options: [
                    { text: 'Start dual-antiplatelets, anticoagulants, and schedule risk-stratified coronary angiogram', correct: true, feedback: 'Correct! NSTEMI management relies on medical stabilization followed by risk-stratified invasive angiography.' },
                    { text: 'Perform immediate thrombolytic therapy (tPA)', correct: false, feedback: 'Incorrect. Thrombolytics are not indicated and increase bleeding risk in NSTEMI where coronary flow is partially preserved.' }
                  ]
                }
              ]
            },
            {
              id: 'elderly_mi',
              title: 'Elderly Presentation',
              difficulty: 'Advanced',
              intro: 'An 82-year-old male is brought from a nursing home due to acute confusion, a syncopal episode, and mild shortness of breath. No chest pain is reported.',
              patient: {
                id: 'MI-GERI-903',
                demographics: '82-year-old Male',
                duration: '1 hour',
                complaint: 'Acute confusion, syncope, and mild shortness of breath',
                vitals: 'BP: 105/62 mmHg | HR: 95 bpm | RR: 24/min | Temp: 36.5°C | SpO2: 91%'
              },
              differentials: {
                chips: ['STEMI Equivalent (New LBBB)', 'Stroke / TIA', 'Sepsis', 'Aortic Stenosis'],
                reasoning: 'Syncope and confusion in geriatric patients can represent acute cardiac hypoperfusion from an MI. A new-onset Left Bundle Branch Block (LBBB) must be managed as a STEMI equivalent.'
              },
              investigations: {
                labs: 'Highly elevated troponin (1.8 ng/mL), BMP, CBC, blood cultures (rule out sepsis)',
                imaging: '12-Lead ECG, Head CT (rule out hemorrhage after syncope)',
                findings: 'ECG demonstrates new-onset Left Bundle Branch Block (LBBB). Troponin is elevated. Head CT is negative for acute hemorrhage.'
              },
              management: {
                options: 'Emergency PCI activation (STEMI equivalent pathway), loading dose Aspirin, IV Heparin, oxygen support.',
                pearl: 'A new or presumably new Left Bundle Branch Block (LBBB) in a patient with acute ischemic symptoms should be treated as a STEMI equivalent.'
              },
              aiInsights: {
                explanation: 'New LBBB obscures normal ST-segment evaluation on ECG. Geriatric patients have reduced physiological reserve, making atypical presentations like sudden confusion or syncope more common due to decreased cardiac output and cerebral hypoperfusion during acute MI.',
                modules: [
                  { name: 'LBBB Diagnostic Criteria', panel: 'topic-learning' },
                  { name: 'Geriatric Cardiac Presentation', panel: 'topic-learning' }
                ]
              },
              steps: [
                {
                  doctor: 'Elderly patients often present atypically. What is your first diagnostic approach?',
                  options: [
                    { text: 'Check 12-lead ECG, cardiac enzymes, and basic blood panel', correct: true, feedback: 'Correct! Syncope, confusion, and dyspnea are classic atypical presentations of acute myocardial infarction in the geriatric population.' },
                    { text: 'Administer a mild sedative for acute confusion', correct: false, feedback: 'Incorrect. Autonomic and cognitive states in older patients make standard diagnostics critical.' }
                  ]
                },
                {
                  doctor: 'ECG shows a new-onset Left Bundle Branch Block (LBBB) along with elevated troponin. Given his symptoms, how should this LBBB be treated?',
                  options: [
                    { text: 'Treat as a STEMI equivalent and activate the Cath Lab for primary PCI', correct: true, feedback: 'Correct! New LBBB in the presence of acute ischemic symptoms is managed as a STEMI equivalent.' },
                    { text: 'Order a head CT and wait for neurology consult', correct: false, feedback: 'Incorrect. Reperfusion cannot wait; LBBB equivalent requires emergency PCI.' }
                  ]
                }
              ]
            },
            {
              id: 'diabetic_mi',
              title: 'Diabetic Presentation',
              difficulty: 'Intermediate',
              intro: 'A 50-year-old diabetic male presents with vague back pain, nausea, and persistent sweating for 2 hours. He believes he is just catching the flu.',
              patient: {
                id: 'MI-DIAB-904',
                demographics: '50-year-old Male',
                duration: '2 hours',
                complaint: 'Vague back pain, nausea, and persistent diaphoresis',
                vitals: 'BP: 130/82 mmHg | HR: 90 bpm | RR: 18/min | Temp: 36.9°C | SpO2: 96%'
              },
              differentials: {
                chips: ['Atypical STEMI', 'Acute Cholecystitis', 'Musculoskeletal Pain', 'Pancreatitis'],
                reasoning: 'Diabetic neuropathy impairs the sensory nerve pathways of the heart, preventing typical visceral chest pain from reaching the brain. Vague back pain, nausea, and sweating should raise suspicion.'
              },
              investigations: {
                labs: 'Troponin I/T, BMP, CBC, Lipase/Amylase (rule out pancreatitis)',
                imaging: '12-Lead ECG, Abdominal Ultrasound',
                findings: 'ECG shows ST-segment elevation in leads I, aVL, V5, V6 (lateral MI). Troponins are positive. Abdominal ultrasound shows a normal gallbladder.'
              },
              management: {
                options: 'Primary PCI of Circumflex artery, Aspirin (325mg), Clopidogrel (600mg), IV Heparin, Metoclopramide for nausea.',
                pearl: 'Silent MIs lead to delayed presentations, making these patients more prone to post-MI complications like congestive heart failure and ventricular remodeling.'
              },
              aiInsights: {
                explanation: 'The lateral wall of the left ventricle is supplied by the Left Circumflex artery. In diabetic patients, autonomic neuropathy destroys the sensory C-fibers, which run along the coronary vessels, masking standard anginal pain.',
                modules: [
                  { name: 'Lateral Wall MI Anatomy', panel: 'topic-learning' },
                  { name: 'Diabetic Autonomic Neuropathy', panel: 'topic-learning' }
                ]
              },
              steps: [
                {
                  doctor: 'Given his diabetes and atypical back/epigastric symptoms, what is your next step?',
                  options: [
                    { text: 'Perform a 12-lead ECG and draw cardiac enzymes', correct: true, feedback: 'Correct! High risk and atypical symptoms in diabetic patients necessitate a rapid rule-out of ACS.' },
                    { text: 'Give antiemetics and advise him to rest at home', correct: false, feedback: 'Incorrect. Autonomic neuropathy may mask crushing pain, making flu-like symptoms highly suspicious.' }
                  ]
                },
                {
                  doctor: 'The ECG confirms ST elevation. Why do diabetic patients often fail to feel typical chest pain during ischemia?',
                  options: [
                    { text: 'Autonomic neuropathy damaging sensory nerve pathways of the heart', correct: true, feedback: 'Correct! Diabetic neuropathy impairs the afferent cardiac autonomic fibers, preventing typical visceral ischemic pain.' },
                    { text: 'Increased threshold for physical pain', correct: false, feedback: 'Incorrect. General pain tolerance is not altered, rather cardiac nociceptive transmission is damaged.' }
                  ]
                }
              ]
            },
            {
              id: 'emergency_mi',
              title: 'Emergency: Cardiogenic Shock',
              difficulty: 'Advanced',
              intro: 'A 60-year-old male is brought by EMS with crushing chest pain. He is cold, clammy, and confused. Vitals: BP 80/50 mmHg, HR 112 bpm, O2 Sat 88% on room air.',
              patient: {
                id: 'MI-SHOCK-905',
                demographics: '60-year-old Male',
                duration: '3 hours',
                complaint: 'Crushing chest pain with confusion and cold, clammy skin',
                vitals: 'BP: 80/50 mmHg | HR: 112 bpm | RR: 28/min | Temp: 36.2°C | SpO2: 88% on room air'
              },
              differentials: {
                chips: ['Cardiogenic Shock (Post-MI)', 'Hypovolemic Shock', 'Septic Shock', 'Pulmonary Embolism'],
                reasoning: 'Crushing chest pain followed by hypotension, tachycardia, and signs of poor end-organ perfusion (confusion, cold extremities) strongly point to cardiogenic shock. Echo will confirm LV failure.'
              },
              investigations: {
                labs: 'Severely elevated Troponin (5.4 ng/mL), Serum Lactate (4.2 mmol/L - hypoperfusion), BMP (elevated BUN/creatinine)',
                imaging: 'Bedside Echocardiogram, 12-Lead ECG, Chest X-ray',
                findings: 'Echocardiogram reveals severe left ventricular anteroapical hypokinesis (LVEF 25%) and diffuse pulmonary edema. ECG shows massive anterior ST elevations.'
              },
              management: {
                options: 'Urgent PCI/Revascularization, Dobutamine (inotropic support) or Norepinephrine (pressor support), Supplemental high-flow Oxygen or CPAP, avoiding large volume boluses.',
                pearl: 'Cardiogenic shock has a mortality rate >40%. Revascularization is the only intervention that significantly reduces mortality. Avoid beta-blockers in acute shock.'
              },
              aiInsights: {
                explanation: 'Cardiogenic shock occurs when more than 40% of the left ventricular myocardium undergoes necrosis, leading to a profound decrease in cardiac index and systemic hypoperfusion. Dobutamine stimulates Beta-1 receptors to improve contractility without increasing afterload.',
                modules: [
                  { name: 'Pathophysiology of Cardiogenic Shock', panel: 'topic-learning' },
                  { name: 'Vasoactive & Inotropic Agents', panel: 'topic-learning' }
                ]
              },
              steps: [
                {
                  doctor: 'This patient is presenting in cardiogenic shock complicating an acute MI. What is the immediate management strategy?',
                  options: [
                    { text: 'Provide oxygen, secure IV access, initiate careful inotropic support, and activate emergency PCI', correct: true, feedback: 'Correct! Shock requires urgent hemodynamic stabilization and immediate mechanical revascularization of the occluded artery.' },
                    { text: 'Administer a rapid 2L Normal Saline bolus to restore blood pressure', correct: false, feedback: 'Incorrect. Excess fluid can lead to flash pulmonary edema in the setting of severe ventricular failure.' }
                  ]
                },
                {
                  doctor: 'Bedside echo confirms severe left ventricular dysfunction with diffuse pulmonary edema. What is the definitive treatment to improve survival?',
                  options: [
                    { text: 'Urgent mechanical coronary revascularization (PCI or CABG)', correct: true, feedback: 'Correct! Reestablishing coronary perfusion is the only definitive treatment shown to improve survival in cardiogenic shock.' },
                    { text: 'Initiate high-dose Beta Blockers to reduce myocardial oxygen demand', correct: false, feedback: 'Incorrect. Beta blockers are contraindicated in acute shock due to negative inotropy.' }
                  ]
                }
              ]
            }
          ]
        },
        diagramLayers: ['Myocardial Tissue Necrosis', 'Occluded Artery Vessel', 'Left Ventricle Chambers'],
        diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 180 C120 100, 280 100, 280 180 C280 260, 200 340, 200 360 C200 340, 120 260, 120 180 Z" fill="rgba(139, 92, 246, 0.03)" stroke="var(--primary)" stroke-dasharray="4 4" stroke-width="1.5"/>
          <g id="layer-left-ventricle-chambers" class="svg-organ-path">
            <path d="M150 210 Q200 210 200 300 Q150 270 150 210 Z" fill="rgba(255,255,255,0.02)" stroke="var(--secondary)" stroke-width="2"/>
            <text x="175" y="250" fill="var(--text-secondary)" font-size="8" text-anchor="middle">LV Lumen</text>
          </g>
          <g id="layer-occluded-artery-vessel" class="svg-organ-path">
            <path d="M200 90 Q170 140 160 210" stroke="#ef4444" stroke-width="5" fill="none"/>
            <path d="M160 210 Q150 250 140 280" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.4"/>
            <circle cx="163" cy="190" r="6" fill="var(--warning)" />
            <text x="130" y="193" fill="var(--warning)" font-size="8">Plaque Rupture</text>
          </g>
          <g id="layer-myocardial-tissue-necrosis" class="svg-organ-path">
            <path d="M142 215 C130 220, 130 260, 145 275 C146 265, 148 230, 142 215 Z" fill="var(--primary)" opacity="0.8"/>
            <text x="110" y="250" fill="var(--primary)" font-size="8">Apex Necrosis</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('LAD Artery', 'Left Anterior Descending Coronary Artery. Supplies the anterior wall and interventricular septum.')">
            <circle cx="180" cy="120" r="5"/>
            <text x="180" y="110" class="svg-hotspottext" text-anchor="middle">LAD Artery</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Ischemic Zone', 'Tissue surrounding the necrosis zone. Recoverable if blood flow is restored quickly.')">
            <circle cx="150" cy="245" r="5"/>
            <text x="150" y="238" class="svg-hotspottext" text-anchor="middle">Ischemia</text>
          </g>
        </svg>`,
        flowchart: [
          { num: 1, title: 'Symptoms Presenting', desc: 'Crushing chest pain radiating to left arm, diaphoresis.', details: 'The patient presents with symptoms of acute ischemia. Immediately assess vitals.', q: 'What is the priority clinical window for ECG?', opts: ['Within 10 minutes', 'Within 2 hours', 'After troponins return', 'Within 24 hours'], ans: 0 },
          { num: 2, title: 'ECG Acquisition', desc: 'Verify ST-segment elevations or T-wave inversions.', details: 'Obtain 12-lead ECG. ST elevation in contiguous leads confirms active transmural infarction.', q: 'ST elevation in leads V1-V4 localizes to which artery?', opts: ['Right Coronary', 'Circumflex', 'Left Anterior Descending', 'Left Main'], ans: 2 },
          { num: 3, title: 'Cardiac Biomarkers', desc: 'Check troponin enzyme markers to verify necrosis.', details: 'Draw blood for serial troponins. First elevation is visible in 2-4 hours.', q: 'Which biomarker remains elevated longest?', opts: ['CK-MB', 'Myoglobin', 'Troponin I', 'LDH'], ans: 2 },
          { num: 4, title: 'Confirm Diagnosis', desc: 'Differentiate STEMI from NSTEMI pathways.', details: 'Classify based on ECG findings and biomarker elevations.', q: 'NSTEMI requires immediate catheterization within 90 minutes?', opts: ['Yes', 'No, STEMI requires it', 'Only if patient is female', 'Only if patient has diabetes'], ans: 1 },
          { num: 5, title: 'Immediate Management', desc: 'Deliver MONA therapy and DAPT antiplatelets.', details: 'Administer Morphine, Oxygen, Nitroglycerin, and Aspirin loading dose.', q: 'Avoid Nitroglycerin in which localized infarction?', opts: ['Anterior Wall', 'Lateral Wall', 'Right Ventricular', 'Anteroseptal'], ans: 2 },
          { num: 6, title: 'Long-Term Treatment', desc: 'Establish beta-blocker, statins, and DAPT prevention.', details: 'Schedule secondary prevention therapies for post-discharge recovery.', q: 'What is the standard DAPT duration post-stent?', opts: ['1 month', '3 months', '12 months', 'Lifelong'], ans: 2 }
        ],
        knowledgeMap: [
          { id: 'center', label: 'Myocardial Infarction', x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 85 },
          { id: 'node1', label: 'LAD Artery', x: 230, y: 80, size: 28, color: 'var(--secondary)', type: 'dep', progress: 90 },
          { id: 'node2', label: 'Perfusion Pressure', x: 380, y: 140, size: 28, color: 'var(--accent)', type: 'dep', progress: 70 },
          { id: 'node3', label: 'Myocardial Necrosis', x: 360, y: 280, size: 28, color: 'var(--success)', type: 'dep', progress: 80 },
          { id: 'node4', label: 'Primary PCI', x: 130, y: 280, size: 28, color: 'var(--warning)', type: 'dep', progress: 60 }
        ],
        flashcards: [
          { q: 'What is the earliest ECG sign of acute myocardial infarction?', a: 'Hyperacute T waves, followed quickly by ST-segment elevation.' },
          { q: 'Which cardiac biomarker is the most specific for diagnosing myocardial necrosis?', a: 'Cardiac Troponin I or T (cTnI / cTnT).' },
          { q: 'What is the key mechanism of action of Aspirin in acute MI?', a: 'Irreversible inhibition of Cyclooxygenase-1 (COX-1), blocking Thromboxane A2 synthesis to prevent platelet aggregation.' }
        ],
        quiz: [
          {
            q: 'A 62-year-old male with an acute STEMI undergoes coronary angiography. The obstruction is localized to the circumflex artery. Which region of the heart is ischemic?',
            opts: ['Anterior wall', 'Lateral wall', 'Inferior wall', 'Posterior septum'],
            ans: 1,
            explain: 'The Left Circumflex (LCx) artery supplies the lateral wall of the left ventricle. Anterior is LAD; inferior is Right Coronary Artery (RCA).'
          }
        ],
        viva: [
          { q: 'Explain the difference between STEMI and NSTEMI pathology.', a: 'STEMI is caused by complete transmural occlusion of a coronary artery (usually red clot), requiring urgent mechanical reperfusion. NSTEMI involves subtotal occlusion (white clot) causing subendocardial necrosis, managed medically and invasively on a risk-stratified basis.' }
        ]
      },
      'Beta Blockers': {
        title: 'Beta Blockers',
        subject: 'Pharmacology',
        overview: `<p><strong>Beta-adrenergic antagonists</strong> (Beta Blockers) are a crucial class of medications that competitively inhibit the binding of catecholamines (epinephrine and norepinephrine) to beta-adrenergic receptors. Receptors are classified into: <strong>Beta-1</strong> (primarily cardioselective, regulating heart rate and contractility), <strong>Beta-2</strong> (regulating smooth muscle relaxation in bronchial and vascular beds), and <strong>Beta-3</strong> (regulating lipolysis).</p>
        <p>By blocking cardiac beta-1 receptors, these agents decrease cyclic adenosine monophosphate (cAMP), leading to negative inotropic (contractility), chronotropic (heart rate), dromotropic (conduction speed), and lusitropic (relaxation) effects. This reduces myocardial oxygen consumption, making them vital in coronary artery disease, heart failure, and hypertension management.</p>`,
        pearl: 'Non-selective beta blockers like Propranolol are strictly contraindicated in patients with asthma or COPD because blocking Beta-2 receptors in the lungs triggers bronchoconstriction and bronchospasm.',
        takeaways: [
          'Beta-1 blockage decreases heart rate and contractility.',
          'Beta-blockers inhibit renin release from juxtaglomerular cells.',
          'Cardioselective agents (Metoprolol, Atenolol) block Beta-1 preferentially.',
          'Carvedilol and Labetalol have combined alpha-1 and beta blocking activities.'
        ],
        mnemonic: {
          phrase: 'BEAM (Cardioselective)',
          explain: 'Beta-1 Selective blockers: Betaxolol, Esmolol, Atenolol, Metoprolol. Safe for respiratory airways.'
        },
        accordions: [
          {
            title: 'Receptor Specificity & Hemodynamics',
            content: `<p>Beta blockers competitively antagonize beta-adrenergic receptors. Beta-1 block (cardioselective) decreases heart rate, contractility, and cardiac output. Beta-2 block triggers bronchoconstriction in the lungs and vasoconstriction in skeletal muscle.</p>
            <p>Third-generation agents (e.g., Carvedilol, Labetalol) also block alpha-1 receptors, promoting systemic vasodilation and further reducing blood pressure.</p>`
          },
          {
            title: 'Indications & Clinical Use',
            content: `<p>Key indications include chronic stable heart failure (where they shield the myocardium from chronic catecholamine toxicity), coronary artery disease (reducing oxygen demand), hypertension, and rate control in arrhythmias like atrial fibrillation.</p>`
          },
          {
            title: 'Side Effects & Contraindications',
            content: `<p>Absolute contraindications include severe bradycardia, second- or third-degree AV block, and cardiogenic shock. Non-selective agents are contraindicated in asthma/COPD.</p>
            <p>Side effects include fatigue, cold extremities, bradycardia, sexual dysfunction, and masking of hypoglycemia symptoms in patients with diabetes.</p>`
          }
        ],
        caseSimulation: {
          intro: 'A 67-year-old female with history of chronic systolic heart failure presents for a checkup. She has been stable on an ACE inhibitor and loop diuretic but has a heart rate of 88 bpm.',
          steps: [
            {
              doctor: 'Is it appropriate to initiate a beta-blocker in this stable chronic heart failure patient?',
              options: [
                { text: 'Yes, beta-blockers improve long-term survival in chronic heart failure', correct: true, feedback: 'Correct! Beta-blockers reduce cardiac remodeling and mortality in chronic systolic heart failure.' },
                { text: 'No, because beta-blockers decrease cardiac contractility', correct: false, feedback: 'Incorrect. While they are negative inotropes, long-term they shield the heart from catecholamine toxicity.' }
              ]
            },
            {
              doctor: 'Which beta-blockers are clinically proven to reduce mortality in chronic heart failure?',
              options: [
                { text: 'Carvedilol, Metoprolol Succinate, and Bisoprolol', correct: true, feedback: 'Correct! Only these specific beta blockers have shown clear survival benefits in HF clinical trials.' },
                { text: 'Propranolol, Atenolol, and Esmolol', correct: false, feedback: 'Incorrect. Atenolol and Propranolol have not shown identical mortality reduction benefits in systolic heart failure.' }
              ]
            }
          ]
        },
        diagramLayers: ['G-Protein Receptor Complex', 'Intracellular cAMP Cascade', 'Myocyte Calcium Channels'],
        diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="140" width="360" height="20" fill="rgba(255,255,255,0.05)" stroke="var(--primary)"/>
          <text x="200" y="130" fill="var(--text-muted)" font-size="8" text-anchor="middle">Cell Membrane</text>
          <g id="layer-g-protein-receptor-complex" class="svg-organ-path">
            <rect x="80" y="100" width="50" height="60" rx="6" fill="var(--primary-glow)" stroke="var(--primary)" stroke-width="2"/>
            <text x="105" y="135" fill="#fff" font-size="7" text-anchor="middle">Beta-1 Receptor</text>
            <circle cx="150" cy="170" r="10" fill="rgba(6, 182, 212, 0.2)" stroke="var(--accent)"/>
            <text x="150" y="173" fill="var(--text-secondary)" font-size="6" text-anchor="middle">Gs</text>
          </g>
          <g id="layer-intracellular-camp-cascade" class="svg-organ-path">
            <rect x="220" y="180" width="60" height="30" rx="4" fill="rgba(255,255,255,0.02)" stroke="var(--secondary)"/>
            <text x="250" y="198" fill="var(--text-secondary)" font-size="8" text-anchor="middle">ATP -> cAMP</text>
            <path d="M160 170 H220" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="2 2"/>
          </g>
          <g id="layer-myocyte-calcium-channels" class="svg-organ-path">
            <rect x="310" y="100" width="40" height="60" rx="4" stroke="var(--success)" stroke-width="2"/>
            <text x="330" y="130" fill="var(--text-secondary)" font-size="7" text-anchor="middle">Ca2+ Channel</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Antagonist Binding', 'Beta blocker binds here, preventing epinephrine from activating the Gs protein complex.')">
            <circle cx="105" cy="95" r="5"/>
            <text x="105" y="85" class="svg-hotspottext" text-anchor="middle">Antagonist site</text>
          </g>
        </svg>`,
        flowchart: [
          { num: 1, title: 'Beta-1 Adrenergic Blockade', desc: 'Competitively blocks cardiac Gs-protein receptors.', details: 'Beta-blockers bind to cardiocytes Beta-1 receptors. This blocks endogenous catecholamines from stimulating the G-protein complex.', q: 'Which G-protein is coupled to the Beta-1 receptor?', opts: ['Gs (Stimulatory)', 'Gi (Inhibitory)', 'Gq (Phospholipase)', 'Gt (Transducin)'], ans: 0 },
          { num: 2, title: 'Adenylate Cyclase Inhibition', desc: 'Decreases intracellular cAMP concentrations.', details: 'Without active Gs, adenylate cyclase activity drops, preventing conversion of ATP into cyclic AMP (cAMP) inside the cells.', q: 'What secondary messenger levels drop after beta blockade?', opts: ['IP3', 'cAMP', 'cGMP', 'DAG'], ans: 1 },
          { num: 3, title: 'Protein Kinase A Inactivation', desc: 'Reduces PKA-mediated target phosphorylation.', details: 'Lower cAMP inactivates Protein Kinase A (PKA), suppressing downstream phosphorylation pathways.', q: 'Which kinase is deactivated due to lower cAMP?', opts: ['Protein Kinase A', 'Protein Kinase C', 'MAP Kinase', 'Tyrosine Kinase'], ans: 0 },
          { num: 4, title: 'Calcium Channel Closure', desc: 'Reduces calcium entry during action potentials.', details: 'Reduced PKA activity decreases the phosphorylation of L-type calcium channels, lowering Ca2+ entry.', q: 'Which channel is inactivated due to reduced phosphorylation?', opts: ['L-type Calcium Channel', 'Sodium Channel', 'Potassium Channel', 'Chloride Channel'], ans: 0 },
          { num: 5, title: 'Negative Cardiodynamics', desc: 'Reduces heart rate, contractility, and conduction speed.', details: 'Lower Ca2+ decreases myocardial contractility (negative inotropy) and heart rate (negative chronotropy).', q: 'Which property describes a drug that decreases heart rate?', opts: ['Negative Inotropic', 'Negative Chronotropic', 'Positive Dromotropic', 'Positive Inotropic'], ans: 1 }
        ],
        knowledgeMap: [
          { id: 'center', label: 'Beta Blockers', x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 80 },
          { id: 'node1', label: 'ANS fibers', x: 200, y: 70, size: 28, color: 'var(--secondary)', type: 'dep', progress: 95 },
          { id: 'node2', label: 'Phase 4 Slopes', x: 370, y: 130, size: 28, color: '#ef4444', type: 'dep', progress: 85 },
          { id: 'node3', label: 'Cardiogenic Shock', x: 340, y: 300, size: 28, color: 'var(--success)', type: 'dep', progress: 50 },
          { id: 'node4', label: 'Receptors upregulation', x: 120, y: 250, size: 28, color: 'var(--warning)', type: 'dep', progress: 40 }
        ],
        flashcards: [
          { q: 'What cardiodynamic changes explain the negative chronotropic effect?', a: 'Blockage of SA node Beta-1 receptors decreases pacemaker currents (Phase 4 depolarization slope), lowering heart rate.' },
          { q: 'What is the danger of abrupt withdrawal of beta blockers?', a: 'Chronic blockade causes receptor up-regulation. Sudden withdrawal allows catecholamines to flood sensitive receptors, triggering severe rebound tachycardia or MI.' },
          { q: 'Which beta blocker is cardioprotective and also blocks Alpha-1 receptors?', a: 'Carvedilol (and Labetalol).' }
        ],
        quiz: [
          {
            q: 'A 24-year-old medical student is diagnosed with severe asthma and develops sinus tachycardia. Which beta blocker is safest to control her heart rate?',
            opts: ['Propranolol', 'Timolol', 'Metoprolol', 'Nadolol'],
            ans: 2,
            explain: 'Metoprolol is Beta-1 selective, whereas Propranolol, Timolol, and Nadolol are non-selective and block Beta-2 receptors, causing severe bronchospasms in asthma.'
          }
        ],
        viva: [
          { q: 'Explain the mechanism of beta blockers in treating glaucoma.', a: 'Topical beta-blockers (e.g. Timolol) block beta receptors on the ciliary body epithelium, reducing the production of aqueous humor and lowering intraocular pressure.' }
        ]
      },
      'Cerebral Stroke': {
        title: 'Cerebral Stroke',
        subject: 'Neurology',
        overview: `<p><strong>Cerebral Stroke</strong>, or cerebrovascular accident (CVA), is characterized by the sudden onset of focal neurological deficits resulting from a local disturbance in cerebral perfusion.</p>
        <p>It is clinically divided into <strong>Ischemic Stroke</strong> (accounting for 85% of cases), which arises from thrombotic or embolic vascular occlusion, and <strong>Hemorrhagic Stroke</strong> (15%), which results from vascular rupture (e.g., subarachnoid or intracerebral hemorrhage). Thrombolysis using tissue plasminogen activator (tPA) is a key medical intervention for ischemic stroke but is strictly contraindicated in hemorrhagic stroke.</p>`,
        pearl: 'A head CT scan without contrast is the primary diagnostic step to rule out intracranial bleeding. Intravenous tPA should only be administered within a 3 to 4.5-hour window from the "last known normal" time.',
        takeaways: [
          'Middle Cerebral Artery (MCA) occlusion is the most common ischemic stroke presentation.',
          'Contralateral hemiparesis and facial droop localizes to the motor cortex.',
          'Non-contrast brain CT scan is essential to rule out hemorrhagic events.',
          'Thrombolytic therapy must be administered within a 4.5-hour inclusion window.'
        ],
        mnemonic: {
          phrase: 'FAST Stroke Checks',
          explain: 'F: Facial drooping, A: Arm weakness, S: Speech difficulty, T: Time to call emergency.'
        },
        accordions: [
          {
            title: 'Etiology & Classifications',
            content: `<p>Strokes are classified into <strong>Ischemic</strong> (85%, caused by focal thrombosis or embolism in cerebral arteries) and <strong>Hemorrhagic</strong> (15%, caused by vascular rupture such as aneurysms or hypertensive bleeds).</p>`
          },
          {
            title: 'Neurological Deficits & Localization',
            content: `<p>Middle Cerebral Artery (MCA) strokes present with contralateral hemiplegia and sensory loss (greater in face/arm than leg). Left-sided MCA lesions often lead to aphasia (Wernicke\'s or Broca\'s).</p>`
          },
          {
            title: 'Acute Management Protocol',
            content: `<p>Obtain an urgent non-contrast head CT scan to rule out hemorrhage. If ischemic and within 4.5 hours of symptom onset, administer intravenous tissue plasminogen activator (tPA).</p>`
          }
        ],
        caseSimulation: {
          intro: 'A 72-year-old female is brought to the emergency department by her husband due to sudden onset of right-sided arm and leg weakness and difficulty speaking, starting 2 hours ago.',
          steps: [
            {
              doctor: 'Welcome Doctor. The patient has right-sided facial droop and motor deficits. What is your immediate diagnostic action?',
              options: [
                { text: 'Order a non-contrast brain CT scan', correct: true, feedback: 'Correct! A non-contrast head CT scan is the gold standard for ruling out hemorrhage immediately.' },
                { text: 'Administer high-dose IV heparin', correct: false, feedback: 'Incorrect. If this is a hemorrhagic stroke, heparin is fatal.' }
              ]
            },
            {
              doctor: 'CT scan shows no signs of hemorrhage or midline shift. The symptoms began exactly 2 hours ago. What is your immediate treatment recommendation?',
              options: [
                { text: 'Administer IV tissue Plasminogen Activator (tPA)', correct: true, feedback: 'Correct! The patient is within the 4.5-hour thrombolytic window and has no hemorrhage.' },
                { text: 'Discharge with physical therapy referral', correct: false, feedback: 'Incorrect. Acute ischemic strokes require active reperfusion therapy.' }
              ]
            }
          ]
        },
        diagramLayers: ['Ischemic Penumbra Territory', 'Occluded Cerebral Artery', 'Brain Cortical Hemispheres'],
        diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 80 C110 80, 80 140, 80 200 C80 280, 140 320, 200 320 C260 320, 320 280, 320 200 C320 140, 290 80, 200 80 Z" fill="rgba(139, 92, 246, 0.03)" stroke="var(--primary)" stroke-dasharray="4 4" stroke-width="1.5"/>
          <g id="layer-brain-cortical-hemispheres" class="svg-organ-path">
            <path d="M120 150 Q200 130 200 280 Q120 270 120 150 Z" fill="rgba(255,255,255,0.02)" stroke="var(--secondary)" stroke-width="2"/>
            <text x="160" y="210" fill="var(--text-secondary)" font-size="8" text-anchor="middle">Left Hemisphere</text>
          </g>
          <g id="layer-occluded-cerebral-artery" class="svg-organ-path">
            <path d="M200 290 Q220 210 240 180" stroke="#ef4444" stroke-width="4" fill="none"/>
            <circle cx="223" cy="230" r="5" fill="var(--warning)" />
            <text x="250" y="233" fill="var(--warning)" font-size="8">MCA Occlusion</text>
          </g>
          <g id="layer-ischemic-penumbra-territory" class="svg-organ-path">
            <path d="M230 150 C280 150, 280 250, 230 250 Z" fill="var(--primary)" opacity="0.8"/>
            <text x="270" y="200" fill="var(--primary)" font-size="8">Penumbra Zone</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('MCA Territory', 'Middle Cerebral Artery territory. Supplies the lateral motor and sensory cortex.')">
            <circle cx="210" cy="190" r="5"/>
            <text x="210" y="180" class="svg-hotspottext" text-anchor="middle">MCA</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Necrotic Core', 'Irreversibly damaged brain tissue at the center of the occlusion.')">
            <circle cx="230" cy="225" r="5"/>
            <text x="230" y="218" class="svg-hotspottext" text-anchor="middle">Core</text>
          </g>
        </svg>`,
        flowchart: [
          { num: 1, title: 'Thrombosis & Occlusion', desc: 'Ischemic occlusion halts perfusion to brain region.', details: 'An embolus or plaque rupture blocks blood flow in a cerebral artery, depriving neurons of oxygen and glucose.', q: 'What is the most common artery occluded in stroke?', opts: ['Middle Cerebral Artery', 'Anterior Cerebral Artery', 'Posterior Cerebral Artery', 'Basilar Artery'], ans: 0 },
          { num: 2, title: 'Penumbra Compromise', desc: 'Ischemic penumbra tissue is compromised but salvageable.', details: 'The central core undergoes rapid necrosis, while the surrounding penumbra is salvageable if flow is restored.', q: 'What is the term for the salvageable brain tissue surrounding the core?', opts: ['Necrotic Core', 'Ischemic Penumbra', 'Infarct Zone', 'Sulcus'], ans: 1 },
          { num: 3, title: 'Urgent CT Assessment', desc: 'Rule out cerebral hemorrhage immediately.', details: 'Non-contrast head CT is essential to differentiate between ischemic and hemorrhagic stroke, as thrombolysis is contraindicated in bleeding.', q: 'How does acute blood appear on a CT scan?', opts: ['Hypodense (dark)', 'Hyperdense (bright white)', 'Isodense (gray)', 'Isointense'], ans: 1 },
          { num: 4, title: 'tPA Thrombolysis', desc: 'Administer thrombolytics within 4.5 hours.', details: 'Tissue plasminogen activator (tPA) restores perfusion to the ischemic penumbra if administered within the 4.5-hour time window.', q: 'What is the main risk of administering tPA?', opts: ['Myocardial rupture', 'Intracranial hemorrhage', 'Renal failure', 'Bronchoconstriction'], ans: 1 },
          { num: 5, title: 'Secondary Prevention', desc: 'Initiate long-term antiplatelets and risk factor control.', details: 'Administer antiplatelet therapy (e.g. Aspirin) and high-intensity statins to prevent recurrence.', q: 'Which antiplatelet is typically initiated for secondary stroke prevention?', opts: ['Aspirin', 'Heparin', 'Warfarin', 'Alteplase'], ans: 0 }
        ],
        knowledgeMap: [
          { id: 'center', label: 'Cerebral Stroke', x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 70 },
          { id: 'node1', label: 'Left MCA region', x: 230, y: 80, size: 28, color: 'var(--secondary)', type: 'dep', progress: 85 },
          { id: 'node2', label: 'Blood thresholds', x: 380, y: 140, size: 28, color: 'var(--accent)', type: 'dep', progress: 90 },
          { id: 'node3', label: 'tPA thrombolysis', x: 360, y: 280, size: 28, color: 'var(--success)', type: 'dep', progress: 65 },
          { id: 'node4', label: 'NIHSS Score checks', x: 130, y: 280, size: 28, color: 'var(--warning)', type: 'dep', progress: 50 }
        ],
        flashcards: [
          { q: 'What is the time window for administering IV tPA in ischemic stroke?', a: 'Within 3 to 4.5 hours of symptom onset.' },
          { q: 'Which aphasia is characterized by impaired comprehension but fluent speech?', a: 'Wernicke\'s (receptive) aphasia, localized to the superior temporal gyrus.' }
        ],
        quiz: [
          {
            q: 'A 74-year-old male presents with right-sided weakness and aphasia. Head CT shows a normal brain outline with no hemorrhage. What is the most appropriate next step?',
            opts: ['Administer aspirin and admit', 'Initiate IV tPA thrombolysis if within 4.5 hours', 'Perform emergency craniotomy', 'Order an immediate MRI scan'],
            ans: 1,
            explain: 'Head CT is normal in the early hours of ischemic stroke; ruling out hemorrhage is the primary role. If the patient is within 4.5 hours, tPA is the gold standard.'
          }
        ],
        viva: [
          { q: 'Explain the concept of ischemic penumbra.', a: 'The penumbra is the zone of ischemic brain tissue surrounding the necrotic core. It is hypoperfused but still viable and can be salvaged if perfusion is achieved quickly.' }
        ]
      },
      'Acute Appendicitis': {
        title: 'Acute Appendicitis',
        subject: 'General Surgery',
        overview: `<p><strong>Acute Appendicitis</strong> is an emergency surgical condition defined by the acute inflammation of the vermiform appendix.</p>
        <p>The pathogenesis centers on appendiceal lumen obstruction, typically caused by a fecalith in adults or lymphoid hyperplasia in children. This triggers mucous accumulation, elevated intraluminal pressure, compromised venous return, ischemic changes, and secondary bacterial invasion. If untreated, it rapidly progresses to necrosis, perforation, and local abscess or diffuse peritonitis.</p>`,
        pearl: 'Tenderness localized to McBurney\'s point (one-third of the distance from the ASIS to the umbilicus) combined with rebound tenderness and guarding suggests peritoneal irritation and indicates prompt surgical evaluation.',
        takeaways: [
          'Lumen obstruction leads to bacterial overgrowth and increased pressure.',
          'Visceral pain starts periumbilical and migrates to somatic RLQ.',
          'Contrast CT scan is the gold standard diagnostic in adults.',
          'Appendectomy (resection) is the standard surgical treatment.'
        ],
        mnemonic: {
          phrase: 'Alvarado Score (MANTRELS)',
          explain: 'Mnemonic: Migration (1), Anorexia (1), Nausea (1), Tenderness RLQ (2), Rebound (1), Elevated temp (1), Leukocytosis (2), Shift left (1).'
        },
        accordions: [
          {
            title: 'Pathophysiology of Appendicitis',
            content: `<p>Acute appendicitis is precipitated by obstruction of the appendiceal lumen, most commonly by a fecalith in adults or lymphoid hyperplasia in children.</p>
            <p>Obstruction leads to mucus accumulation, intraluminal distension, bacterial overgrowth (Escherichia coli and Bacteroides fragilis), ischemia, and potential gangrene or perforation.</p>`
          },
          {
            title: 'Clinical Presentation & Signs',
            content: `<p>Typically starts as vague periumbilical pain (visceral pain) that migrates to the right lower quadrant (somatic pain at McBurney\'s point). Accompanied by fever, anorexia, nausea, and vomiting.</p>
            <p>Key signs include Rovsing\'s sign, Psoas sign, and Obturator sign. Rebound tenderness suggests localized peritonitis.</p>`
          },
          {
            title: 'Diagnostics & Treatment',
            content: `<p>Leukocytosis is typical on CBC. Ultrasound is first-line in children and pregnant women. Contrast-enhanced CT scan is the gold standard for diagnosis in adults.</p>
            <p>Treatment is surgical excision (laparoscopic or open appendectomy) and pre-operative broad-spectrum IV antibiotics.</p>`
          }
        ],
        caseSimulation: {
          intro: 'A 24-year-old male presents with abdominal pain that started around his belly button 14 hours ago and has now shifted to his right lower side. He feels nauseated and has had no appetite.',
          steps: [
            {
              doctor: 'Welcome Doctor. On exam, the patient has localized tenderness in the RLQ. What diagnostic sign will you check to assess for appendicitis?',
              options: [
                { text: 'Check for tenderness at McBurney\'s point and Rovsing\'s sign', correct: true, feedback: 'Correct! McBurney\'s point tenderness and referred rebound (Rovsing) are high-yield clinical indicators.' },
                { text: 'Perform a chest X-ray', correct: false, feedback: 'Incorrect. Chest X-ray is not helpful for diagnosing appendicitis.' }
              ]
            },
            {
              doctor: 'His Alvarado score is 8, and an abdominal ultrasound shows a non-compressible appendiceal wall measuring 8.5mm. What is the definitive treatment path?',
              options: [
                { text: 'Prepare the patient for laparoscopic appendectomy', correct: true, feedback: 'Correct! A surgical appendectomy is the definitive treatment for acute appendicitis to prevent rupture.' },
                { text: 'Discharge with oral pain medications and observe', correct: false, feedback: 'Incorrect. Delaying surgery carries a high risk of appendix rupture and peritonitis.' }
              ]
            }
          ]
        },
        diagramLayers: ['Inflamed Appendiceal Wall', 'Obstructing Fecalith Core', 'Cecum Junction Lumen'],
        diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 100 Q150 250 250 250 Q280 250 280 100" fill="rgba(139, 92, 246, 0.03)" stroke="var(--primary)" stroke-dasharray="4 4" stroke-width="1.5"/>
          <g id="layer-cecum-junction-lumen" class="svg-organ-path">
            <path d="M180 120 Q180 220 230 220" fill="rgba(255,255,255,0.02)" stroke="var(--secondary)" stroke-width="2"/>
            <text x="205" y="160" fill="var(--text-secondary)" font-size="8" text-anchor="middle">Cecum</text>
          </g>
          <g id="layer-obstructing-fecalith-core" class="svg-organ-path">
            <circle cx="245" cy="228" r="6" fill="var(--warning)" stroke="var(--warning)" stroke-width="1"/>
            <text x="210" y="242" fill="var(--warning)" font-size="8">Fecalith Block</text>
          </g>
          <g id="layer-inflamed-appendiceal-wall" class="svg-organ-path">
            <path d="M245 230 Q240 310 210 330 Q205 320 235 290 Z" fill="#ef4444" stroke="#ef4444" stroke-width="2" opacity="0.8"/>
            <text x="180" y="310" fill="#ef4444" font-size="8">Inflamed Appendix</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('McBurney Point', 'Two-thirds of the distance from the umbilicus to the anterior superior iliac spine.')">
            <circle cx="225" cy="300" r="5"/>
            <text x="225" y="290" class="svg-hotspottext" text-anchor="middle">McBurney</text>
          </g>
        </svg>`,
        flowchart: [
          { num: 1, title: 'Lumen Obstruction', desc: 'Obstruction leads to mucus accumulation and distension.', details: 'Fecalith or lymphoid hyperplasia blocks the appendiceal lumen, increasing pressure and promoting bacterial growth.', q: 'What is the most common cause of appendiceal obstruction in children?', opts: ['Fecalith', 'Foreign body', 'Lymphoid hyperplasia', 'Carcinoid tumor'], ans: 2 },
          { num: 2, title: 'Bacterial Overgrowth', desc: 'Ischemia leads to mucosal stasis and bacterial invasion.', details: 'Pressure compromised venous stasis invites bacterial proliferation, principally E. coli and B. fragilis.', q: 'Which bacteria are most commonly cultured in acute appendicitis?', opts: ['E. coli and B. fragilis', 'S. aureus', 'Pseudomonas', 'C. difficile'], ans: 0 },
          { num: 3, title: 'Pain Migration', desc: 'Visceral pain shifts from periumbilical to somatic RLQ.', details: 'As inflammation spreads to the parietal peritoneum, pain localizes precisely at McBurney\'s point.', q: 'Which peritoneal layer mediates the sharp, localized pain?', opts: ['Parietal peritoneum', 'Visceral peritoneum', 'Mesentery', 'Omentum'], ans: 0 },
          { num: 4, title: 'Diagnostic Imaging', desc: 'Observe target signs or appendiceal thickening.', details: 'Leukocytosis paired with non-compressible appendiceal outline >6mm confirms pathology.', q: 'An appendiceal wall thickness above what threshold suggests appendicitis?', opts: ['3mm', '6mm', '10mm', '12mm'], ans: 1 },
          { num: 5, title: 'Surgical Resection', desc: 'Perform urgent appendectomy to prevent rupture.', details: 'Surgical removal of the appendix (typically laparoscopic) is the definitive treatment to prevent gangrene and diffuse peritonitis.', q: 'What diagnostic sign suggests diffuse peritonitis?', opts: ['Rovsing sign', 'Guarding & Rebound tenderness', 'Psoas sign', 'Obturator sign'], ans: 1 }
        ],
        knowledgeMap: [
          { id: 'center', label: 'Acute Appendicitis', x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 75 },
          { id: 'node1', label: 'Fecalith block', x: 230, y: 80, size: 28, color: 'var(--secondary)', type: 'dep', progress: 80 },
          { id: 'node2', label: 'Alvarado scores', x: 380, y: 140, size: 28, color: 'var(--accent)', type: 'dep', progress: 85 },
          { id: 'node3', label: 'Resection surgery', x: 360, y: 280, size: 28, color: 'var(--success)', type: 'dep', progress: 90 },
          { id: 'node4', label: 'Peritonitis signs', x: 130, y: 280, size: 28, color: 'var(--warning)', type: 'dep', progress: 40 }
        ],
        flashcards: [
          { q: 'Where is McBurney\'s point anatomically located?', a: 'One-third of the distance from the anterior superior iliac spine (ASIS) to the umbilicus.' },
          { q: 'What is Rovsing\'s sign?', a: 'Pain referred to the right lower quadrant when pressure is applied to the left lower quadrant.' }
        ],
        quiz: [
          {
            q: 'A 19-year-old female presents with migrating RLQ pain and guarding. Ultrasound shows a compressible appendix of 4mm diameter. What is the best course of action?',
            opts: ['Prepare for immediate surgery', 'Look for alternative diagnoses; appendix is normal', 'Initiate broad-spectrum antibiotics', 'Discharge home with laxatives'],
            ans: 1,
            explain: 'A normal appendix is less than 6mm in diameter and is compressible on ultrasound. If compressible and 4mm, appendicitis is highly unlikely.'
          }
        ],
        viva: [
          { q: 'How do you perform the Psoas sign and what does it indicate?', a: 'Passive extension of the right hip stretches the iliopsoas muscle. Pain indicates retrocecal appendicitis.' }
        ]
      },
      'Diabetes Mellitus': {
        title: 'Diabetes Mellitus',
        subject: 'Endocrinology',
        overview: `<p><strong>Diabetes Mellitus</strong> is a chronic metabolic disorder characterized by persistent hyperglycemia resulting from defects in insulin secretion, insulin action, or both. Type 1 is caused by autoimmune beta-cell destruction, leading to absolute insulin deficiency. Type 2 is driven by progressive insulin resistance combined with inadequate compensatory insulin secretion.</p>`,
        pearl: 'HbA1c of >= 6.5% confirms the diagnosis. Microvascular complications (retinopathy, nephropathy, neuropathy) are highly linked to glycemic control; optimize therapy to target HbA1c < 7.0% in most adults.',
        takeaways: [
          'Insulin resistance leads to decreased glucose uptake in peripheral tissues.',
          'Diagnosis is confirmed via Fasting Glucose >= 126 mg/dL or HbA1c >= 6.5%.',
          'Metformin is the first-line oral pharmacotherapy, reducing hepatic glucose output.',
          'Chronic complications include diabetic nephropathy and peripheral arterial disease.'
        ],
        mnemonic: {
          phrase: 'DIABETES Dangers',
          explain: 'D: Diet, I: Insulin, A: A1c checks, B: Beta cell loss, E: Eye checks, T: Tingling (neuropathy), E: Exercise, S: Sugar monitoring.'
        },
        accordions: [
          {
            title: 'Clinical Presentation & Types',
            content: `<p>Type 1 (polyuria, polydipsia, weight loss, DKA risk) vs Type 2 (often asymptomatic, linked to obesity).</p>`
          },
          {
            title: 'Diagnostic Standards',
            content: `<p>Fasting plasma glucose, HbA1c, or 2-hour Oral Glucose Tolerance Test (OGTT).</p>`
          },
          {
            title: 'Stepwise Treatment Pathways',
            content: `<p>Metformin first-line, SGLT2 inhibitors (cardioprotective), GLP-1 agonists (weight loss), and basal/bolus insulin.</p>`
          }
        ],
        caseSimulation: {
          scenarios: [
            {
              id: 'newly_diagnosed',
              title: 'Newly Diagnosed Type 2 Diabetes',
              difficulty: 'Beginner',
              intro: 'A 52-year-old obese male presents for routine evaluation. He reports polyuria and mild fatigue. Fasting blood glucose today is 142 mg/dL.',
              patient: {
                id: 'DM-NEW-801',
                demographics: '52-year-old Male (BMI 32.5)',
                duration: '3 months',
                complaint: 'Polyuria, polydipsia, and mild fatigue',
                vitals: 'BP: 132/84 mmHg | HR: 76 bpm | RR: 16/min | Temp: 36.8°C | SpO2: 98%'
              },
              differentials: {
                chips: ['Type 2 Diabetes Mellitus', 'Diabetes Insipidus', 'Primary Polydipsia', 'Latent Autoimmune Diabetes (LADA)'],
                reasoning: 'The triad of polyuria, polydipsia, and fatigue in an obese patient strongly suggests type 2 diabetes. Fasting glucose >= 126 mg/dL or HbA1c >= 6.5% confirms the diagnosis.'
              },
              investigations: {
                labs: 'Fasting Plasma Glucose (142 mg/dL), Hemoglobin A1c (7.2%), Lipid Panel (elevated LDL, low HDL)',
                imaging: 'None indicated at this stage',
                findings: 'Fasting glucose and HbA1c meet criteria for the diagnosis of diabetes mellitus. Renal function (BMP) is normal.'
              },
              management: {
                options: 'Initiate Metformin (500mg daily, titrating to 1000mg BID), lifestyle counseling (DASH diet, 150 min exercise/week), and weight loss goals.',
                pearl: 'Metformin is first-line because it reduces hepatic gluconeogenesis and improves insulin sensitivity without causing hypoglycemia or weight gain.'
              },
              aiInsights: {
                explanation: 'Type 2 Diabetes involves progressive insulin resistance and relative insulin deficiency. Chronic hyperglycemia leads to microvascular (retinopathy, nephropathy, neuropathy) and macrovascular (CAD, stroke) complications, making early glycemic control crucial.',
                modules: [
                  { name: 'Metformin Mechanism of Action', panel: 'topic-learning' },
                  { name: 'Diagnostic Criteria for Diabetes', panel: 'topic-learning' }
                ]
              },
              steps: [
                {
                  doctor: 'The patient has fasting glucose of 142 mg/dL. What test will you order next to confirm?',
                  options: [
                    { text: 'Order a Hemoglobin A1c (HbA1c) test', correct: true, feedback: 'Correct! HbA1c is 7.2%, confirming Diabetes Mellitus (threshold is >=6.5%).' },
                    { text: 'Begin insulin therapy immediately', correct: false, feedback: 'Incorrect. Verify the diagnosis with a diagnostic test first before starting chronic medications.' }
                  ]
                },
                {
                  doctor: 'His HbA1c is confirmed at 7.2%. What is your initial first-line management recommendation?',
                  options: [
                    { text: 'Initiate Metformin and recommend lifestyle modifications', correct: true, feedback: 'Correct! Metformin combined with diet and exercise is the gold standard initial therapy for Type 2 Diabetes.' },
                    { text: 'Start high-dose sulfonylureas alone', correct: false, feedback: 'Incorrect. Sulfonylureas carry risks of hypoglycemia and weight gain, and are not first-line.' }
                  ]
                }
              ]
            },
            {
              id: 'dka',
              title: 'Diabetic Ketoacidosis (DKA)',
              difficulty: 'Advanced',
              intro: 'A 21-year-old female with Type 1 Diabetes presents to the ER with abdominal pain, vomiting, and deep, rapid breathing. Vitals: BP 90/60 mmHg, HR 118 bpm. Bedside glucose: 450 mg/dL.',
              patient: {
                id: 'DM-DKA-802',
                demographics: '21-year-old Female',
                duration: '1 day',
                complaint: 'Abdominal pain, vomiting, and rapid deep breathing (Kussmaul)',
                vitals: 'BP: 90/60 mmHg | HR: 118 bpm | RR: 28/min | Temp: 37.2°C | SpO2: 97%'
              },
              differentials: {
                chips: ['Diabetic Ketoacidosis (DKA)', 'Hyperosmolar Hyperglycemic State (HHS)', 'Sepsis', 'Acute Pancreatitis'],
                reasoning: 'Abdominal pain, vomiting, tachypnea, and hyperglycemia in a young patient suggest DKA. Diagnosis is confirmed by the triad of hyperglycemia, metabolic acidosis, and ketonemia.'
              },
              investigations: {
                labs: 'Bedside Glucose (450 mg/dL), ABG (pH 7.15, HCO3 12 mEq/L), Serum Ketones (Positive), Potassium (3.1 mEq/L), elevated Anion Gap (22)',
                imaging: 'Chest X-ray (rule out pneumonia as precipitant)',
                findings: 'Acidosis, low bicarbonate, and positive ketones confirm DKA. Serum potassium is dangerously low at 3.1 mEq/L.'
              },
              management: {
                options: 'Aggressive IV fluid resuscitation (Normal Saline), hold insulin until potassium is repleted to >3.3 mEq/L, then start continuous IV insulin infusion.',
                pearl: 'In DKA, insulin shifts potassium into cells. Starting insulin when potassium is <3.3 mEq/L can cause fatal arrhythmias. Potassium must be corrected first.'
              },
              aiInsights: {
                explanation: 'DKA is characterized by absolute insulin deficiency, leading to lipolysis and ketone body formation (acetoacetate and beta-hydroxybutyrate). These ketoacids consume bicarbonate, producing metabolic acidosis with an elevated anion gap.',
                modules: [
                  { name: 'Pathophysiology of Ketogenesis', panel: 'topic-learning' },
                  { name: 'Anion Gap Acidosis Diagnosis', panel: 'topic-learning' }
                ]
              },
              steps: [
                {
                  doctor: 'You suspect DKA. What initial laboratory investigations are crucial to confirm the diagnosis?',
                  options: [
                    { text: 'Arterial blood gas (ABG), serum ketones, and basic metabolic panel (BMP)', correct: true, feedback: 'Correct! DKA is diagnosed by the triad of hyperglycemia (>250), metabolic acidosis (pH < 7.3, HCO3 < 18), and positive ketones.' },
                    { text: 'Order a random urine toxicology and wait', correct: false, feedback: 'Incorrect. While tox screen may be ordered, ABG, electrolytes, and ketones are mandatory for DKA confirmation.' }
                  ]
                },
                {
                  doctor: 'ABG shows pH 7.15, HCO3 12 mEq/L, and ketones are positive. What is the priority management step?',
                  options: [
                    { text: 'Aggressive IV fluid resuscitation with Normal Saline, followed by IV insulin infusion', correct: true, feedback: 'Correct! Volume restoration is the primary step to restore perfusion, followed by insulin to clear ketones.' },
                    { text: 'Administer subcutaneous fast-acting insulin and discharge home', correct: false, feedback: 'Incorrect. DKA is a medical emergency requiring intensive monitoring and IV insulin infusion.' }
                  ]
                },
                {
                  doctor: 'Her potassium is 3.1 mEq/L. Should you start insulin immediately?',
                  options: [
                    { text: 'No, hold insulin and replete potassium first until it is above 3.3 mEq/L', correct: true, feedback: 'Correct! Insulin shifts potassium into cells, which can trigger fatal hypokalemic cardiac arrhythmias if baseline is low.' },
                    { text: 'Yes, start insulin immediately to resolve the acidosis', correct: false, feedback: 'Incorrect. Giving insulin when potassium is < 3.3 is extremely dangerous.' }
                  ]
                }
              ]
            },
            {
              id: 'long_term',
              title: 'Long-Term Management & Complications',
              difficulty: 'Intermediate',
              intro: 'A 58-year-old male with a 10-year history of Type 2 Diabetes presents for a follow-up. Despite taking maximum dose Metformin, his HbA1c is 8.4%. He has history of coronary artery disease.',
              patient: {
                id: 'DM-COMP-803',
                demographics: '58-year-old Male',
                duration: '10 years',
                complaint: 'Uncontrolled glycemia (HbA1c 8.4%) and history of CAD',
                vitals: 'BP: 138/86 mmHg | HR: 74 bpm | RR: 16/min | Temp: 36.7°C | SpO2: 98%'
              },
              differentials: {
                chips: ['Suboptimal Glycemic Control', 'Diabetic Nephropathy (Microalbuminuria)', 'Coronary Artery Disease', 'Peripheral Neuropathy'],
                reasoning: 'The patient has uncontrolled T2D and high cardiorenal risk. ADA guidelines recommend agents with proven cardiovascular benefits (SGLT2i or GLP-1ra) for patients with established ASCVD.'
              },
              investigations: {
                labs: 'HbA1c (8.4%), Urine Microalbumin-to-Creatinine Ratio (35 mg/g - elevated), Serum Creatinine (1.1 mg/dL)',
                imaging: 'Dilated Eye Exam (shows mild non-proliferative retinopathy)',
                findings: 'Elevated HbA1c and positive microalbuminuria confirm early stage diabetic nephropathy. Cardiac history indicates high cardiovascular risk.'
              },
              management: {
                options: 'Add Empagliflozin (SGLT2 inhibitor) or Liraglutide (GLP-1 agonist), start Lisinopril (ACE inhibitor) for renal protection, and optimize statin therapy.',
                pearl: 'ACE inhibitors and ARBs dilate the efferent renal arteriole, lowering glomerular hydrostatic pressure and reducing protein excretion. Monitor serum potassium and creatinine.'
              },
              aiInsights: {
                explanation: 'SGLT2 inhibitors block glucose reabsorption in the proximal convoluted tubule, promoting glycosuria. They provide cardiorenal protection by reducing preload, afterload, and glomerular hyperfiltration.',
                modules: [
                  { name: 'SGLT2 Inhibitors and the Kidney', panel: 'topic-learning' },
                  { name: 'Microvascular Complications of Diabetes', panel: 'topic-learning' }
                ]
              },
              steps: [
                {
                  doctor: 'His glycemic control is suboptimal. Given his history of coronary artery disease, which class of agent is preferred next?',
                  options: [
                    { text: 'GLP-1 Receptor Agonist (e.g., Liraglutide) or SGLT2 Inhibitor (e.g., Empagliflozin)', correct: true, feedback: 'Correct! GLP-1 agonists and SGLT2 inhibitors have class-effect cardiovascular benefits in patients with established cardiovascular disease.' },
                    { text: 'Sulfonylurea (e.g., Glipizide)', correct: false, feedback: 'Incorrect. Sulfonylureas do not provide cardiovascular protection and can cause hypoglycemia.' }
                  ]
                },
                {
                  doctor: 'The patient shows microalbuminuria (35 mg/g) on screening. Which class of medication will prevent progression of diabetic nephropathy?',
                  options: [
                    { text: 'ACE inhibitor (e.g., Lisinopril) or ARB (e.g., Losartan)', correct: true, feedback: 'Correct! ACE inhibitors and ARBs dilate the efferent arteriole, reducing intraglomerular pressure and halting nephropathy.' },
                    { text: 'Loop Diuretics (e.g., Furosemide)', correct: false, feedback: 'Incorrect. Loop diuretics manage fluid volume but do not offer direct glomerular protection.' }
                  ]
                }
              ]
            },
            {
              id: 'gestational',
              title: 'Gestational Diabetes',
              difficulty: 'Intermediate',
              intro: 'A 26-year-old pregnant female at 26 weeks gestation has a positive 1-hour glucose challenge test. A follow-up 3-hour oral glucose tolerance test (OGTT) confirms Gestational Diabetes.',
              patient: {
                id: 'DM-GEST-804',
                demographics: '26-year-old Pregnant Female (26 weeks gestation)',
                duration: '1 week',
                complaint: 'Positive screening for gestational diabetes',
                vitals: 'BP: 118/74 mmHg | HR: 82 bpm | RR: 16/min | Temp: 36.9°C | SpO2: 99%'
              },
              differentials: {
                chips: ['Gestational Diabetes Mellitus (GDM)', 'Pre-gestational Type 2 Diabetes', 'Normal Pregnancy Physiology'],
                reasoning: 'A positive 1-hour glucose challenge followed by a positive 3-hour oral glucose tolerance test (OGTT) confirms GDM. Human placental lactogen (hPL) increases insulin resistance in pregnancy.'
              },
              investigations: {
                labs: '1-hour Glucose Challenge (152 mg/dL), 3-hour OGTT (Fasting: 96, 1h: 190, 2h: 165, 3h: 145 mg/dL - diagnostic)',
                imaging: 'Fetal Growth Ultrasound',
                findings: 'Fasting and post-load glucose values are elevated, confirming GDM. Fetal ultrasound shows normal growth parameters.'
              },
              management: {
                options: 'Initial nutritional counseling and lifestyle modification. If fasting glucose remains >95 mg/dL, initiate subcutaneous insulin therapy.',
                pearl: 'Insulin is the preferred pharmacotherapy for GDM because it does not cross the placenta, avoiding risk of fetal hypoglycemia. Oral agents (metformin/glyburide) are second-line.'
              },
              aiInsights: {
                explanation: 'Human placental lactogen (hPL), growth hormone, and progesterone secreted by the placenta increase maternal insulin resistance to ensure adequate glucose supply for the fetus. If maternal pancreas cannot compensate, gestational diabetes develops.',
                modules: [
                  { name: 'Placental Hormones & Insulin Resistance', panel: 'topic-learning' },
                  { name: 'Neonatal Complications of GDM', panel: 'topic-learning' }
                ]
              },
              steps: [
                {
                  doctor: 'What is the first-line therapeutic approach for gestational diabetes?',
                  options: [
                    { text: 'Nutritional counseling, dietary modifications, and blood glucose monitoring', correct: true, feedback: 'Correct! Most patients can achieve glycemic control through dietary adjustments and regular tracking.' },
                    { text: 'Start oral Metformin therapy immediately', correct: false, feedback: 'Incorrect. Dietary changes are always first line; pharmacotherapy is only initiated if lifestyle modifications fail.' }
                  ]
                },
                {
                  doctor: 'Despite dietary changes, her fasting blood glucose levels remain consistently above 95 mg/dL. What is the preferred pharmacotherapy?',
                  options: [
                    { text: 'Subcutaneous Insulin therapy', correct: true, feedback: 'Correct! Insulin does not cross the placenta, making it the safest and most effective choice for gestational diabetes.' },
                    { text: 'Oral Sulfonylureas', correct: false, feedback: 'Incorrect. Sulfonylureas cross the placenta and can cause fetal hyperinsulinemia and neonatal hypoglycemia.' }
                  ]
                }
              ]
            }
          ]
        },
        diagramLayers: ['Insulin Receptor Down-Regulation', 'Pancreatic Beta Cell Exhaustion', 'Glomerular Basement Thickening'],
        diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 200 C80 150, 180 120, 280 180 C320 200, 320 250, 280 270 C180 300, 80 250, 80 200 Z" fill="rgba(139, 92, 246, 0.03)" stroke="var(--primary)" stroke-dasharray="4 4" stroke-width="1.5"/>
          <g id="layer-pancreatic-beta-cell-exhaustion" class="svg-organ-path">
            <circle cx="150" cy="200" r="30" fill="rgba(6,182,212,0.1)" stroke="var(--accent)" stroke-width="2"/>
            <text x="150" y="203" fill="var(--accent)" font-size="7" text-anchor="middle">Islet Cells</text>
          </g>
          <g id="layer-insulin-receptor-down-regulation" class="svg-organ-path">
            <rect x="230" y="150" width="80" height="15" rx="4" fill="rgba(255,255,255,0.05)" stroke="var(--secondary)"/>
            <text x="270" y="160" fill="var(--text-secondary)" font-size="6" text-anchor="middle">Cell Membrane</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Beta Cells', 'Pancreatic beta cells secrete insulin in response to elevated blood glucose. Defect leads to absolute or relative insulin deficiency.')">
            <circle cx="150" cy="200" r="5"/>
            <text x="150" y="190" class="svg-hotspottext" text-anchor="middle">Beta Cells</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('GLUT4 Transporters', 'Insulin-dependent glucose transporters that translocate to the cell membrane to allow glucose entry.')">
            <circle cx="270" cy="158" r="5"/>
            <text x="270" y="148" class="svg-hotspottext" text-anchor="middle">GLUT4</text>
          </g>
        </svg>`,
        flowchart: [
          { num: 1, title: 'Risk Factors', desc: 'Obesity, sedentary lifestyle, family history, dyslipidemia.', details: 'Lifestyle and genetic factors combine to promote systemic tissue insulin resistance.', q: 'Which body mass index (BMI) indicates obesity?', opts: ['BMI >30 kg/m2', 'BMI 20-25 kg/m2', 'BMI 15-18 kg/m2', 'BMI 25-29.9 kg/m2'], ans: 0 },
          { num: 2, title: 'Screening', desc: 'Order fasting plasma glucose or HbA1c tests.', details: 'Obtain glucose panels to screen asymptomatic high-risk individuals.', q: 'What is the pre-diabetic HbA1c range?', opts: ['5.7% - 6.4%', '4.0% - 5.5%', '>= 6.5%', '7.0% - 8.5%'], ans: 0 },
          { num: 3, title: 'Diagnosis', desc: 'Fasting glucose >= 126 mg/dL or HbA1c >= 6.5%.', details: 'Establish diagnosis via repeat laboratory confirmations of glycemic metrics.', q: 'Confirm diabetes using a random plasma glucose threshold of:', opts: ['>= 200 mg/dL', '>= 100 mg/dL', '>= 140 mg/dL', '>= 126 mg/dL'], ans: 0 },
          { num: 4, title: 'Treatment', desc: 'Initiate lifestyle modifications and Metformin (first-line).', details: 'Begin treatment focusing on oral hypoglycemic agents and diet controls.', q: 'Metformin primary mechanism of action targets:', opts: ['Hepatic gluconeogenesis reduction', 'Increased pancreatic insulin release', 'Kidney glucose excretion', 'Alpha-glucosidase block'], ans: 0 },
          { num: 5, title: 'Monitoring', desc: 'Monitor HbA1c every 3-6 months to assess long-term control.', details: 'Assess blood sugar stability and lifestyle compliance regularly.', q: 'The target HbA1c for most non-pregnant adult diabetics is:', opts: ['< 7.0%', '< 6.0%', '< 8.0%', '< 5.5%'], ans: 0 },
          { num: 6, title: 'Follow-Up', desc: 'Screen annually for diabetic nephropathy, retinopathy, and neuropathy.', details: 'Check urine microalbumin, run dilated eye exam, and conduct monofilament foot exams.', q: 'Diabetic kidney disease is first marked on urinalysis by:', opts: ['Microalbuminuria', 'Glucosuria', 'Hematuria', 'Ketonuria'], ans: 0 }
        ],
        knowledgeMap: [
          { id: 'center', label: 'Diabetes Mellitus', x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 50 },
          { id: 'node1', label: 'Insulin Resistance', x: 230, y: 80, size: 28, color: 'var(--secondary)', type: 'dep', progress: 40 },
          { id: 'node2', label: 'Beta Cells', x: 380, y: 140, size: 28, color: 'var(--accent)', type: 'dep', progress: 60 },
          { id: 'node3', label: 'Metformin', x: 360, y: 280, size: 28, color: 'var(--success)', type: 'dep', progress: 70 },
          { id: 'node4', label: 'Retinopathy', x: 130, y: 280, size: 28, color: 'var(--warning)', type: 'dep', progress: 30 }
        ],
        flashcards: [
          { q: 'What is the diagnostic criteria for diabetes based on fasting glucose?', a: 'Fasting plasma glucose >= 126 mg/dL.' },
          { q: 'What is the first-line medication for type 2 diabetes?', a: 'Metformin.' }
        ],
        quiz: [
          {
            q: 'Which oral agent is contraindicated in patients with severe renal impairment (e.g. eGFR < 30 mL/min)?',
            opts: ['Metformin', 'Sitagliptin', 'Pioglitazone', 'Glipizide'],
            ans: 0,
            explain: 'Metformin is excreted renally and accumulates in renal failure, increasing the risk of lactic acidosis.'
          }
        ],
        viva: [
          { q: 'Contrast Type 1 and Type 2 Diabetes pathophysiology.', a: 'Type 1 involves absolute insulin deficiency via autoimmune destruction of pancreatic beta cells. Type 2 is driven by peripheral insulin resistance paired with relative beta cell secretory failure.' }
        ]
      },
      'Asthma': {
        title: 'Asthma',
        subject: 'Pulmonology',
        overview: `<p><strong>Asthma</strong> is a chronic inflammatory disorder of the airways characterized by bronchial hyperresponsiveness, reversible airflow obstruction, and airway remodeling. Chronic inflammation is driven by IgE-mediated type I hypersensitivity in allergic asthma, leading to eosinophil recruitment and airway smooth muscle bronchospasm.</p>`,
        pearl: 'Diagnose via spirometry demonstrating a post-bronchodilator increase in FEV1 of >= 12% and 200 mL. Inhaled corticosteroids (ICS) form the cornerstone of chronic management.',
        takeaways: [
          'Bronchoconstriction is mediated by airway smooth muscle contraction.',
          'Diagnosis requires demonstrating reversible airflow limitation.',
          'Inhaled corticosteroids reduce airway mucosal inflammation.',
          'SABA (Albuterol) is used as quick-relief rescue therapy.'
        ],
        mnemonic: {
          phrase: 'ASTHMA Spasm',
          explain: 'A: Albuterol rescue, S: Spirometry diagnosis, T: Trigger avoidance, H: Hyperresponsiveness, M: Mast cell release, A: Anti-inflammatory steroids.'
        },
        accordions: [
          {
            title: 'Bronchial Hyperresponsiveness',
            content: `<p>Pathophysiology of smooth muscle contraction and eosinophilic infiltration.</p>`
          },
          {
            title: 'Spirometry Guidelines',
            content: `<p>FEV1/FVC ratio and reversibility testing showing FEV1 increase >12% post-bronchodilator.</p>`
          },
          {
            title: 'Stepwise Pharmacotherapy',
            content: `<p>GINA guidelines recommending ICS-Formoterol controller and SABA rescue therapy.</p>`
          }
        ],
        caseSimulation: {
          intro: 'A 19-year-old female presents with coughing and wheezing triggered by cold air and exercise.',
          steps: [
            {
              doctor: 'Welcome Doctor. What diagnostic test will you use to confirm asthma in this patient?',
              options: [
                { text: 'Perform spirometry with pre/post-bronchodilator challenge', correct: true, feedback: 'Correct! Spirometry demonstrates airway reversibility.' },
                { text: 'Order a high-resolution chest CT scan', correct: false, feedback: 'Incorrect. CT scan is not indicated for standard asthma screening.' }
              ]
            },
            {
              doctor: 'Spirometry confirms reversible obstruction. What is your first-line daily controller therapy recommendation?',
              options: [
                { text: 'Inhaled Corticosteroid (ICS) combined with Formoterol as needed', correct: true, feedback: 'Correct! Modern GINA guidelines recommend ICS-Formoterol controller therapy.' },
                { text: 'Oral prednisone daily', correct: false, feedback: 'Incorrect. Systemic steroids are reserved for severe refractory exacerbations.' }
              ]
            }
          ]
        },
        diagramLayers: ['Bronchial Smooth Muscle Spasm', 'Mucosal Edema Influx', 'Alveolar Hyperinflation'],
        diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 60 L200 150 L150 220 M200 150 L250 220" stroke="var(--primary)" stroke-width="4" stroke-linecap="round"/>
          <text x="200" y="50" fill="var(--text-secondary)" font-size="8" text-anchor="middle">Trachea</text>
          <path d="M140 220 C100 220, 80 260, 80 320 C80 350, 110 360, 150 360 C180 360, 180 320, 180 300 Z" fill="rgba(139, 92, 246, 0.03)" stroke="var(--secondary)" stroke-width="2"/>
          <text x="130" y="300" fill="var(--text-secondary)" font-size="8" text-anchor="middle">Left Lung</text>
          <path d="M260 220 C300 220, 320 260, 320 320 C320 350, 290 360, 250 360 C220 360, 220 320, 220 300 Z" fill="rgba(139, 92, 246, 0.03)" stroke="var(--secondary)" stroke-width="2"/>
          <text x="270" y="300" fill="var(--text-secondary)" font-size="8" text-anchor="middle">Right Lung</text>
          <g class="svg-hotspot" onclick="app.showHotspot('Carina / Bronchi', 'Tracheal bifurcation. Main bronchus routes air into left and right lungs.')">
            <circle cx="200" cy="150" r="5"/>
            <text x="200" y="140" class="svg-hotspottext" text-anchor="middle">Bronchus</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Alveoli / Bronchioles', 'Terminal air sacs where oxygen-carbon dioxide gas exchange takes place.')">
            <circle cx="110" cy="300" r="5"/>
            <text x="110" y="290" class="svg-hotspottext" text-anchor="middle">Alveoli</text>
          </g>
        </svg>`,
        flowchart: [
          { num: 1, title: 'Symptoms Presenting', desc: 'Dry cough, wheezing, dyspnea, chest tightness.', details: 'Evaluate patient for episodic worsening airway symptoms.', q: 'Which sign is typical on physical exam during exacerbation?', opts: ['High-pitched expiratory wheezing', 'Inspiratory stridor', 'Coarse rales', 'Diminished heart sounds'], ans: 0 },
          { num: 2, title: 'Severity Assessment', desc: 'Evaluate nocturnal symptoms and rescue inhaler frequency.', details: 'Verify how often airway distress limits activities or interrupts sleep.', q: 'What Peak Flow variability indicates poorly controlled asthma?', opts: ['>20% fluctuation', '<10% fluctuation', 'No change', 'Stable flatlines'], ans: 0 },
          { num: 3, title: 'Diagnosis Spirometry', desc: 'FEV1 reversibility >12% after bronchodilator.', details: 'Demonstrate reversible airflow limitation following SABA administration.', q: 'A spirometry FEV1 increase of how much confirms reversibility?', opts: ['>= 12% and 200 mL', '>= 5% and 50 mL', '>= 20% and 500 mL', '>= 1% and 10 mL'], ans: 0 },
          { num: 4, title: 'Reliever Therapy', desc: 'Inhale SABA for acute bronchodilation rescue.', details: 'Short-acting beta-2 agonists (e.g. Albuterol) stimulate receptors to quickly relax bronchial smooth muscle.', q: 'Which receptor is stimulated by Albuterol to relax airway smooth muscle?', opts: ['Alpha-1 adrenergic', 'Beta-2 adrenergic', 'Muscarinic M3', 'H1 Histamine'], ans: 1 },
          { num: 5, title: 'Controller Therapy', desc: 'Daily Inhaled Corticosteroids (ICS) to reduce mucosal inflammation.', details: 'Prescribe low-dose inhaled corticosteroids (e.g. Budesonide) daily as controller therapy.', q: 'What is the primary role of inhaled Budesonide in chronic asthma?', opts: ['Mucosal inflammatory reducer', 'Acute bronchodilator rescue', 'Leukotriene receptor blocker', 'IgE binder'], ans: 0 }
        ],
        knowledgeMap: [
          { id: 'center', label: 'Asthma', x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 60 },
          { id: 'node1', label: 'Bronchospasm', x: 230, y: 80, size: 28, color: 'var(--secondary)', type: 'dep', progress: 85 },
          { id: 'node2', label: 'Spirometry', x: 380, y: 140, size: 28, color: 'var(--accent)', type: 'dep', progress: 90 },
          { id: 'node3', label: 'Inhaled Steroids', x: 360, y: 280, size: 28, color: 'var(--success)', type: 'dep', progress: 65 },
          { id: 'node4', label: 'Eosinophils', x: 130, y: 280, size: 28, color: 'var(--warning)', type: 'dep', progress: 50 }
        ],
        flashcards: [
          { q: 'What spirometry change indicates reversible airway obstruction?', a: 'Post-bronchodilator increase in FEV1 of >= 12%.' },
          { q: 'What is the first-line daily controller medicine?', a: 'Inhaled Corticosteroids (ICS).' }
        ],
        quiz: [
          {
            q: 'Which mediator is targeted by Montelukast therapy?',
            opts: ['Leukotrienes', 'Histamine', 'IgE', 'Prostaglandins'],
            ans: 0,
            explain: 'Montelukast is a selective leukotriene receptor antagonist used as controller therapy.'
          }
        ],
        viva: [
          { q: 'Explain airway remodeling in chronic asthma.', a: 'Uncontrolled inflammation leads to subepithelial fibrosis, smooth muscle hypertrophy, and goblet cell hyperplasia, causing fixed airway obstruction.' }
        ]
      },
      'Heart Anatomy': {
        title: 'Heart Anatomy',
        subject: 'Cardiology',
        overview: `<p><strong>Heart Anatomy</strong> details the structural organization of the human heart, comprising four chambers, four valves, and the systemic, pulmonary, and coronary circulations. Coronary vessels (LAD, Circumflex, RCA) arise from the aortic sinuses to supply the thick myocardium.</p>`,
        pearl: 'The Left Anterior Descending (LAD) artery runs in the anterior interventricular sulcus and is the most common site of coronary artery occlusion. Heart valves prevent backflow of blood.',
        takeaways: [
          'Four chambers: Right/Left Atria and Right/Left Ventricles.',
          'Four valves: Tricuspid, Pulmonary, Mitral, and Aortic.',
          'Coronary circulation supplies oxygenated blood to the myocardium.',
          'Systemic circulation routes oxygenated blood to the body.'
        ],
        mnemonic: {
          phrase: 'TPMA Valves',
          explain: 'Tricuspid, Pulmonic, Mitral, Aortic (order of blood flow through valves).'
        },
        accordions: [
          {
            title: 'Chambers and Flow',
            content: `<p>Path of blood through the right side (deoxygenated) and left side (oxygenated) chambers.</p>`
          },
          {
            title: 'Coronary Arteries',
            content: `<p>Detailed anatomy of the Left Coronary Artery (LAD & Circumflex) and Right Coronary Artery.</p>`
          },
          {
            title: 'Heart Valves',
            content: `<p>Semilunar and Atrioventricular valves, structural prevention of regurgitation.</p>`
          }
        ],
        caseSimulation: {
          intro: 'A scholar is reviewing lead localizations for myocardial infarctions.',
          steps: [
            {
              doctor: 'Welcome Doctor. Which coronary artery supplies the anterior wall of the LV, imaged by leads V1-V4?',
              options: [
                { text: 'Left Anterior Descending (LAD) Artery', correct: true, feedback: 'Correct! LAD occlusion presents with elevations in V1-V4.' },
                { text: 'Right Coronary Artery (RCA)', correct: false, feedback: 'Incorrect. RCA supplies the inferior wall, imaged by II, III, aVF.' }
              ]
            }
          ]
        },
        diagramLayers: ['Coronary Arteries', 'Myocardial Wall Chambers', 'Cardiac Valves', 'Conduction Pathways'],
        diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 180 C120 100, 280 100, 280 180 C280 260, 200 340, 200 360 C200 340, 120 260, 120 180 Z" fill="rgba(99, 102, 241, 0.02)" stroke="var(--primary)" stroke-dasharray="4 4" stroke-width="1"/>
          
          <g id="layer-myocardial-wall-chambers">
            <!-- Right Atrium -->
            <path d="M120 150 C120 110, 175 110, 175 160 C175 180, 120 180, 120 150 Z" fill="rgba(54, 162, 235, 0.06)" stroke="var(--secondary)" stroke-width="1.5"/>
            <text x="145" y="145" fill="var(--text-secondary)" font-size="7" font-weight="bold">RA</text>
            
            <!-- Left Atrium -->
            <path d="M225 150 C225 110, 280 110, 280 160 C280 180, 225 180, 225 150 Z" fill="rgba(255, 99, 132, 0.06)" stroke="var(--secondary)" stroke-width="1.5"/>
            <text x="250" y="145" fill="var(--text-secondary)" font-size="7" font-weight="bold">LA</text>
            
            <!-- Right Ventricle -->
            <path d="M130 190 H195 V275 C160 255, 130 225, 130 190 Z" fill="rgba(54, 162, 235, 0.12)" stroke="var(--primary)" stroke-width="2"/>
            <text x="160" y="220" fill="var(--text-secondary)" font-size="7" font-weight="bold">RV</text>
            
            <!-- Left Ventricle (Thick Wall) -->
            <path d="M205 190 H270 C270 225, 250 255, 205 295 V190 Z" fill="rgba(255, 99, 132, 0.12)" stroke="var(--primary)" stroke-width="3"/>
            <text x="235" y="225" fill="var(--text-secondary)" font-size="7" font-weight="bold">LV</text>
          </g>

          <g id="layer-coronary-arteries">
            <!-- LAD Artery -->
            <path d="M200 130 C190 170, 195 210, 210 250" stroke="#ef4444" stroke-width="2.5" fill="none"/>
            <path d="M200 130 C220 150, 235 170, 245 190" stroke="#ef4444" stroke-width="2" fill="none" stroke-dasharray="1 1"/>
          </g>

          <g id="layer-cardiac-valves">
            <!-- Tricuspid -->
            <circle cx="160" cy="185" r="4" fill="var(--warning)" />
            <text x="160" y="177" fill="var(--warning)" font-size="6" text-anchor="middle">Tricuspid</text>
            <!-- Mitral -->
            <circle cx="240" cy="185" r="4" fill="var(--warning)" />
            <text x="240" y="177" fill="var(--warning)" font-size="6" text-anchor="middle">Mitral</text>
          </g>

          <g id="layer-conduction-pathways">
            <!-- SA Node -->
            <circle cx="130" cy="135" r="4" fill="#10b981" />
            <text x="130" y="127" fill="#10b981" font-size="6" text-anchor="middle">SA Node</text>
            <!-- AV Node -->
            <circle cx="195" cy="175" r="3" fill="#10b981" />
            <text x="180" y="174" fill="#10b981" font-size="6">AV Node</text>
            <!-- Bundle of His -->
            <path d="M195 175 L200 205" stroke="#10b981" stroke-width="1.5" fill="none" />
            <!-- Bundle Branches -->
            <path d="M200 205 C185 230, 175 250, 175 265" stroke="#10b981" stroke-width="1" fill="none" />
            <path d="M200 205 C215 230, 225 250, 225 270" stroke="#10b981" stroke-width="1" fill="none" />
            <!-- Purkinje Fibers -->
            <path d="M175 265 C165 260, 145 235, 140 215" stroke="#10b981" stroke-width="0.8" fill="none" stroke-dasharray="2 1" />
            <path d="M225 270 C235 265, 255 240, 260 220" stroke="#10b981" stroke-width="0.8" fill="none" stroke-dasharray="2 1" />
            <text x="200" y="290" fill="#10b981" font-size="6" text-anchor="middle">Purkinje Fibers</text>
          </g>
          
          <g class="svg-hotspot" onclick="app.showHotspot('Aortic Valve', 'Semilunar valve located between the Left Ventricle and the Aorta, preventing blood from backflowing into the LV.')">
            <circle cx="205" cy="140" r="5"/>
            <text x="205" y="130" class="svg-hotspottext" text-anchor="middle">Aortic Valve</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Left Ventricle', 'Thickest chamber of the heart that pumps oxygenated blood into the aorta for systemic circulation.')">
            <circle cx="235" cy="220" r="5"/>
            <text x="235" y="210" class="svg-hotspottext" text-anchor="middle">LV</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Mitral Valve', 'Bicuspid valve between Left Atrium and Left Ventricle, prevents backflow during ventricular contraction (systole).')">
            <circle cx="240" cy="185" r="5"/>
            <text x="240" y="200" class="svg-hotspottext" text-anchor="middle">Mitral</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Sinoatrial (SA) Node', 'The primary pacemaker of the heart, located in the right atrium, initiating cardiac electrical impulses.')">
            <circle cx="130" cy="135" r="5"/>
            <text x="130" y="145" class="svg-hotspottext" text-anchor="middle">SA Node</text>
          </g>
        </svg>`,
        flowchart: [
          { num: 1, title: 'Venous Return', desc: 'Deoxygenated blood enters Right Atrium via IVC/SVC.', details: 'Blood returns from systemic veins under low pressure.', q: 'Which structure drains upper body venous return?', opts: ['Superior Vena Cava', 'Inferior Vena Cava', 'Coronary Sinus', 'Aorta'], ans: 0 },
          { num: 2, title: 'Right Ventricle Loading', desc: 'Tricuspid valve opens, RV fills with blood.', details: 'Pressure shifts force the tricuspid valve open, loading the right ventricle.', q: 'Which valve opens to allow filling of the right ventricle?', opts: ['Mitral Valve', 'Tricuspid Valve', 'Aortic Valve', 'Pulmonary Valve'], ans: 1 },
          { num: 3, title: 'Pulmonary Circulation', desc: 'RV pumps blood through Pulmonary valve to lungs.', details: 'The right ventricle contracts, driving blood through the pulmonary arteries for oxygenation.', q: 'Pulmonary arteries carry oxygenated blood?', opts: ['Yes, always', 'No, they carry deoxygenated blood', 'Only during inhalation', 'Only in fetuses'], ans: 1 },
          { num: 4, title: 'Left Atrium & Ventricle', desc: 'LA receives pulmonary blood, filling the thick LV.', details: 'Oxygenated blood returns via pulmonary veins to the left atrium and passes through the mitral valve to the left ventricle.', q: 'Which chamber has the thickest myocardium to support high perfusion pressures?', opts: ['Right Atrium', 'Right Ventricle', 'Left Atrium', 'Left Ventricle'], ans: 3 },
          { num: 5, title: 'Systemic Perfusion', desc: 'LV ejects blood through Aortic valve to the aorta.', details: 'Ventricular systole forces the aortic valve open, perfusing the body tissues.', q: 'Which valve prevents arterial backflow into the Left Ventricle?', opts: ['Mitral Valve', 'Tricuspid Valve', 'Pulmonary Valve', 'Aortic Valve'], ans: 3 }
        ],
        knowledgeMap: [
          { id: 'center', label: 'Heart Anatomy', x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 90 },
          { id: 'node1', label: 'Chambers', x: 230, y: 80, size: 28, color: 'var(--secondary)', type: 'dep', progress: 95 },
          { id: 'node2', label: 'Valves', x: 380, y: 140, size: 28, color: 'var(--accent)', type: 'dep', progress: 85 }
        ],
        flashcards: [
          { q: 'Which heart chamber has the thickest myocardium?', a: 'The Left Ventricle.' }
        ],
        quiz: [
          {
            q: 'Which valve lies between the left ventricle and the aorta?',
            opts: ['Aortic Valve', 'Mitral Valve', 'Pulmonary Valve', 'Tricuspid Valve'],
            ans: 0,
            explain: 'The aortic semilunar valve prevents backflow of blood into the left ventricle.'
          }
        ],
        viva: [
          { q: 'Describe the pulmonary circulation loop.', a: 'Deoxygenated blood leaves the RV via the pulmonic valve, enters pulmonary arteries, gains oxygen in lung capillaries, and returns via pulmonary veins to the LA.' }
        ]
      },
      'Nephron': {
        title: 'Nephron',
        subject: 'Nephrology',
        overview: `<p><strong>The Nephron</strong> is the microscopic functional unit of the kidney, comprising the glomerulus (filtration), proximal tubule (reabsorption), Loop of Henle (concentration gradient), distal tubule (secretion/reabsorption), and collecting duct (water reabsorption).</p>`,
        pearl: 'Most sodium and water reabsorption (65%) takes place in the Proximal Convoluted Tubule (PCT). Loop diuretics act on the thick ascending limb of the Loop of Henle.',
        takeaways: [
          'Glomerulus filters plasma based on size and charge.',
          'PCT reabsorbs all glucose, amino acids, and 65% of NaCl.',
          'Loop of Henle establishes the countercurrent osmotic gradient.',
          'Collecting duct reabsorbs water under ADH (vasopressin) control.'
        ],
        mnemonic: {
          phrase: 'GP-LDC Nephrons',
          explain: 'G: Glomerulus, P: PCT, L: Loop, D: DCT, C: Collecting Duct (segment sequence).'
        },
        accordions: [
          {
            title: 'Glomerular Filtration Barrier',
            content: `<p>Podocytes, basement membrane, and fenestrated endothelium filter blood based on charge and size.</p>`
          },
          {
            title: 'Tubular Reabsorption',
            content: `<p>Active and passive reabsorption loops, principally in the PCT.</p>`
          },
          {
            title: 'Clinical Diuretic Sites',
            content: `<p>Acetazolamide acts on PCT, Loop diuretics on loop of Henle, Thiazides on DCT, Spironolactone on collecting duct.</p>`
          }
        ],
        caseSimulation: {
          intro: 'A patient is initiated on Furosemide (loop diuretic). You must evaluate its site of action.',
          steps: [
            {
              doctor: 'Welcome Doctor. On which segment of the nephron do loop diuretics act?',
              options: [
                { text: 'Thick ascending limb of the Loop of Henle', correct: true, feedback: 'Correct! They inhibit the Na-K-2Cl cotransporter in the thick ascending limb.' },
                { text: 'Proximal Convoluted Tubule (PCT)', correct: false, feedback: 'Incorrect. PCT is targeted by carbonic anhydrase inhibitors.' }
              ]
            }
          ]
        },
        diagramLayers: ['Glomerulus & Bowman', 'Proximal Tubule (PCT)', 'Loop of Henle', 'Distal Tubule (DCT)', 'Collecting Duct'],
        diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="layer-glomerulus-&-bowman">
            <!-- Bowman's Capsule wall -->
            <path d="M60 140 C30 170, 30 230, 60 260 C90 290, 140 290, 170 260 C185 245, 185 215, 170 200" stroke="var(--primary)" stroke-width="2.5" fill="none"/>
            <text x="115" y="270" fill="var(--text-secondary)" font-size="8" text-anchor="middle" font-weight="bold">Bowman's Capsule</text>
            <!-- Glomerulus Capillary Tuft inside -->
            <path d="M85 200 Q115 170 120 200 T145 200" stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round"/>
            <circle cx="115" cy="200" r="18" fill="rgba(239, 68, 68, 0.08)" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2 2"/>
            <text x="115" y="203" fill="#ef4444" font-size="7" font-weight="bold" text-anchor="middle">Glomerulus</text>
          </g>

          <g id="layer-proximal-tubule-(pct)">
            <path d="M170 200 Q200 160 215 190 T240 180" stroke="var(--secondary)" stroke-width="6" fill="none" stroke-linecap="round"/>
            <text x="205" y="150" fill="var(--secondary)" font-size="7" font-weight="bold">Proximal Tubule (PCT)</text>
            <path d="M190 180 L175 165" stroke="var(--success)" stroke-width="1" fill="none" />
            <text x="170" y="160" fill="var(--success)" font-size="6">Na+, Glucose, H2O</text>
          </g>

          <g id="layer-loop-of-henle">
            <!-- Descending limb -->
            <path d="M240 180 V320" stroke="var(--accent)" stroke-width="3" fill="none"/>
            <path d="M240 240 L220 240" stroke="var(--success)" stroke-width="1" fill="none" />
            <text x="215" y="243" fill="var(--success)" font-size="5" text-anchor="end">H2O</text>
            <!-- Hairpin turn -->
            <path d="M240 320 C240 345, 275 345, 275 320" stroke="var(--accent)" stroke-width="3.5" fill="none"/>
            <!-- Ascending limb -->
            <path d="M275 320 V180" stroke="var(--accent)" stroke-width="5" fill="none" stroke-linecap="round"/>
            <path d="M275 260 L295 260" stroke="#f59e0b" stroke-width="1" fill="none" />
            <text x="300" y="263" fill="#f59e0b" font-size="5" text-anchor="start">NaCl (active)</text>
            <text x="257" y="348" fill="var(--accent)" font-size="7" font-weight="bold" text-anchor="middle">Loop of Henle</text>
          </g>

          <g id="layer-distal-tubule-(dct)">
            <path d="M275 180 Q290 150 310 180 T330 170" stroke="var(--secondary)" stroke-width="6" fill="none" stroke-linecap="round"/>
            <text x="305" y="145" fill="var(--secondary)" font-size="7" font-weight="bold">Distal Tubule (DCT)</text>
            <path d="M300 170 L315 155" stroke="var(--success)" stroke-width="1" fill="none" />
            <text x="318" y="152" fill="var(--success)" font-size="5">Na+/Ca2+</text>
          </g>

          <g id="layer-collecting-duct">
            <path d="M330 170 V340" stroke="var(--primary)" stroke-width="7" fill="none" stroke-linecap="round"/>
            <path d="M330 210 H345 M330 260 H345 M330 310 H345" stroke="var(--primary)" stroke-width="2"/>
            <text x="362" y="255" fill="var(--text-secondary)" font-size="7" font-weight="bold" text-anchor="middle" transform="rotate(90 362 255)">Collecting Duct</text>
            <path d="M330 240 L310 240" stroke="var(--success)" stroke-width="1" fill="none" />
            <text x="305" y="243" fill="var(--success)" font-size="5" text-anchor="end">H2O (via ADH)</text>
          </g>

          <g class="svg-hotspot" onclick="app.showHotspot('Glomerulus', 'Capillary tuft that performs the primary filtration of blood based on hydrostatic pressure.')">
            <circle cx="115" cy="200" r="5"/>
            <text x="115" y="190" class="svg-hotspottext" text-anchor="middle">Glomerulus</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Loop of Henle', 'Creates an osmotic gradient in the renal medulla, enabling water reabsorption in the collecting duct.')">
            <circle cx="258" cy="328" r="5"/>
            <text x="258" y="320" class="svg-hotspottext" text-anchor="middle">Loop</text>
          </g>
        </svg>`,
        flowchart: [
          { num: 1, title: 'Glomerular Filtration', desc: 'Blood is filtered at the glomerulus under pressure.', details: 'Hydrostatic pressure forces fluid through the capillary endothelium into Bowman\'s space.', q: 'Charge filtration selectivity repels which molecules?', opts: ['Negatively charged proteins', 'Positively charged ions', 'Glucose', 'Water'], ans: 0 },
          { num: 2, title: 'PCT Reabsorption', desc: 'Active reabsorption of glucose, amino acids, and sodium.', details: 'Transporters reabsorb essential nutrients back into blood.', q: 'Which cotransporter reabsorbs glucose in the PCT?', opts: ['SGLT2', 'GLUT4', 'Na-K-ATPase', 'Aquaporin 1'], ans: 0 },
          { num: 3, title: 'Loop Concentration', desc: 'Establishes the medullary osmotic concentration gradient.', details: 'The thin descending limb reabsorbs water; the thick ascending limb actively pumps out salts.', q: 'Which segment is impermeable to water but actively transports NaCl?', opts: ['Descending Loop of Henle', 'Thick Ascending Loop of Henle', 'Proximal Tubule', 'Collecting Duct'], ans: 1 },
          { num: 4, title: 'DCT Fine-Tuning', desc: 'Fine-tunes electrolytes and calcium levels.', details: 'The distal convoluted tubule reabsorbs sodium and calcium under parathyroid and aldosterone controls.', q: 'Which hormone regulates sodium reabsorption in the DCT?', opts: ['Vasopressin', 'Aldosterone', 'Parathyroid Hormone', 'Calcitonin'], ans: 1 },
          { num: 5, title: 'Water Conservation', desc: 'Urine concentration in the collecting duct.', details: 'Antidiuretic Hormone (ADH) triggers aquaporin-2 insertions to reabsorb water back into circulation.', q: 'Which hormone increases water permeability in the collecting duct by inserting aquaporin-2 channels?', opts: ['Aldosterone', 'Antidiuretic Hormone (ADH)', 'Renin', 'Angiotensin II'], ans: 1 }
        ],
        knowledgeMap: [
          { id: 'center', label: 'Nephron', x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 75 },
          { id: 'node1', label: 'Glomerulus', x: 230, y: 80, size: 28, color: 'var(--secondary)', type: 'dep', progress: 80 },
          { id: 'node2', label: 'Loop of Henle', x: 380, y: 140, size: 28, color: 'var(--accent)', type: 'dep', progress: 85 }
        ],
        flashcards: [
          { q: 'Which part of the nephron reabsorbs glucose?', a: 'The Proximal Convoluted Tubule (PCT).' }
        ],
        quiz: [
          {
            q: 'Where do thiazide diuretics act in the nephron?',
            opts: ['Distal Convoluted Tubule', 'Proximal Convoluted Tubule', 'Collecting Duct', 'Descending Loop of Henle'],
            ans: 0,
            explain: 'Thiazides inhibit the Na-Cl cotransporter in the early distal convoluted tubule.'
          }
        ],
        viva: [
          { q: 'Explain the countercurrent multiplier system.', a: 'The loop of Henle establishes a hypertonic medullary interstitium. Descending limb is permeable to water; ascending limb is impermeable to water but actively transports NaCl.' }
        ]
      },
      'Cranial Nerves': {
        title: 'Cranial Nerves',
        subject: 'Neurology',
        overview: `<p><strong>Cranial Nerves</strong> consist of 12 pairs of nerves arising directly from the brain and brainstem, mediating motor, sensory, and parasympathetic functions of the head and neck. Understanding their brainstem origins (midbrain, pons, medulla) is vital for localizing neurological lesions.</p>`,
        pearl: 'CN III, IV arise from the midbrain; CN V, VI, VII, VIII from the pons; CN IX, X, XI, XII from the medulla. CN VII palsy causes complete ipsilateral facial paralysis.',
        takeaways: [
          '12 pairs of nerves managing facial sensations, ocular movements, and speech.',
          'Cranial nerve nuclei are localized within specific brainstem divisions.',
          'CN III controls most extraocular muscles and pupillary constriction.',
          'CN X (Vagus) provides visceral parasympathetic innervation.'
        ],
        mnemonic: {
          phrase: 'Some Say Marry Money',
          explain: 'Mnemonic for cranial nerves functions: Sensory, Motor, or Both (I to XII in order).'
        },
        accordions: [
          {
            title: 'Extraocular Motor Nerves',
            content: `<p>CN III, IV, and VI control voluntary ocular orientations and levator palpebrae elevation.</p>`
          },
          {
            title: 'Facial Sensation and Muscles',
            content: `<p>CN V mediates tactile/pain facial pathways; CN VII regulates motor facial expression expression.</p>`
          },
          {
            title: 'Vagal Parasympathetics',
            content: `<p>CN X (Vagus) controls resting cardio-pulmonary rates and gut contractions.</p>`
          }
        ],
        caseSimulation: {
          intro: 'A patient presents with right-sided facial weakness. The forehead is not spared.',
          steps: [
            {
              doctor: 'Welcome Doctor. Forehead involvement is visible. Is this a lower motor neuron (LMN) or upper motor neuron (UMN) lesion?',
              options: [
                { text: 'Lower Motor Neuron (LMN) CN VII palsy', correct: true, feedback: 'Correct! Ipsilateral forehead weakness confirms an LMN Bell\'s Palsy.' },
                { text: 'Upper Motor Neuron (UMN) cortical stroke', correct: false, feedback: 'Incorrect. Stroke displays forehead sparing due to bilateral cortical innervation.' }
              ]
            }
          ]
        },
        diagramLayers: ['CN I-IV Nerves', 'CN V-VIII Nerves', 'CN IX-XII Nerves', 'Brainstem Nuclei'],
        diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M180 80 L220 80 Q210 180 230 220 T210 330 L190 330 T170 220 Q190 180 180 80 Z" fill="rgba(99, 102, 241, 0.03)" stroke="var(--primary)" stroke-width="2"/>
          <text x="200" y="70" fill="var(--text-secondary)" font-size="8" text-anchor="middle" font-weight="bold">Brainstem</text>
          
          <g id="layer-brainstem-nuclei">
            <line x1="180" y1="130" x2="220" y2="130" stroke="rgba(255,255,255,0.1)"/>
            <text x="200" y="115" fill="var(--text-muted)" font-size="6" text-anchor="middle">Midbrain</text>
            <line x1="172" y1="210" x2="228" y2="210" stroke="rgba(255,255,255,0.1)"/>
            <text x="200" y="170" fill="var(--text-muted)" font-size="6" text-anchor="middle">Pons</text>
            <text x="200" y="270" fill="var(--text-muted)" font-size="6" text-anchor="middle">Medulla</text>
          </g>

          <g id="layer-cn-i-iv-nerves">
            <!-- CN I Olfactory -->
            <path d="M200 50 L120 50" stroke="var(--primary)" stroke-width="1.5" />
            <text x="115" y="47" fill="var(--primary)" font-size="5" text-anchor="end">CN I (Olfactory)</text>
            <!-- CN II Optic -->
            <path d="M200 70 L110 70" stroke="var(--primary)" stroke-width="1.5" />
            <text x="105" y="67" fill="var(--primary)" font-size="5" text-anchor="end">CN II (Optic)</text>
            <!-- CN III Oculomotor -->
            <path d="M195 110 L120 110" stroke="var(--primary)" stroke-width="2" />
            <text x="115" y="107" fill="var(--primary)" font-size="5" text-anchor="end">CN III (Oculomotor)</text>
            <!-- CN IV Trochlear -->
            <path d="M205 125 L280 125" stroke="var(--primary)" stroke-width="1.5" />
            <text x="285" y="122" fill="var(--primary)" font-size="5" text-anchor="start">CN IV (Trochlear)</text>
          </g>
          
          <g id="layer-cn-v-viii-nerves">
            <!-- CN V Trigeminal -->
            <path d="M190 170 L110 170" stroke="var(--accent)" stroke-width="3" />
            <text x="105" y="167" fill="var(--accent)" font-size="5" text-anchor="end">CN V (Trigeminal)</text>
            <!-- CN VI Abducens -->
            <path d="M195 190 L120 190" stroke="var(--accent)" stroke-width="1.5" />
            <text x="115" y="187" fill="var(--accent)" font-size="5" text-anchor="end">CN VI (Abducens)</text>
            <!-- CN VII Facial -->
            <path d="M190 205 L110 205" stroke="var(--accent)" stroke-width="2" />
            <text x="105" y="202" fill="var(--accent)" font-size="5" text-anchor="end">CN VII (Facial)</text>
            <!-- CN VIII Vestibulocochlear -->
            <path d="M210 215 L280 215" stroke="var(--accent)" stroke-width="2" />
            <text x="285" y="212" fill="var(--accent)" font-size="5" text-anchor="start">CN VIII (Vestibulocochlear)</text>
          </g>
          
          <g id="layer-cn-ix-xii-nerves">
            <!-- CN IX Glossopharyngeal -->
            <path d="M190 245 L110 245" stroke="#ef4444" stroke-width="1.5" />
            <text x="105" y="242" fill="#ef4444" font-size="5" text-anchor="end">CN IX (Glossopharyngeal)</text>
            <!-- CN X Vagus -->
            <path d="M190 265 L120 275" stroke="#ef4444" stroke-width="2.5" />
            <text x="115" y="272" fill="#ef4444" font-size="5" text-anchor="end">CN X (Vagus)</text>
            <!-- CN XI Accessory -->
            <path d="M210 290 L280 295" stroke="#ef4444" stroke-width="2" />
            <text x="285" y="292" fill="#ef4444" font-size="5" text-anchor="start">CN XI (Accessory)</text>
            <!-- CN XII Hypoglossal -->
            <path d="M195 310 L120 315" stroke="#ef4444" stroke-width="1.5" />
            <text x="115" y="312" fill="#ef4444" font-size="5" text-anchor="end">CN XII (Hypoglossal)</text>
          </g>
          
          <g class="svg-hotspot" onclick="app.showHotspot('CN III (Oculomotor)', 'Originates in the midbrain. Regulates most extraocular movements, lid elevation, and parasympathetic pupillary constriction.')">
            <circle cx="140" cy="120" r="5"/>
            <text x="135" y="117" class="svg-hotspottext" text-anchor="end">CN III</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('CN V (Trigeminal)', 'Originates in the pons. Mediates facial sensation (V1, V2, V3) and supplies motor fibers for mastication.')">
            <circle cx="110" cy="170" r="5"/>
            <text x="105" y="167" class="svg-hotspottext" text-anchor="end">CN V</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('CN VII (Facial)', 'Originates in the pontomedullary junction. Innervates muscles of facial expression, taste on anterior 2/3 of tongue, and lacrimation.')">
            <circle cx="120" cy="215" r="5"/>
            <text x="115" y="212" class="svg-hotspottext" text-anchor="end">CN VII</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('CN X (Vagus)', 'Originates in the post-sulcal medulla. Controls resting parasympathetic heart rate, vocal cord larynx motor strength, and gag reflexes.')">
            <circle cx="120" cy="275" r="5"/>
            <text x="115" y="272" class="svg-hotspottext" text-anchor="end">CN X</text>
          </g>
        </svg>`,
        flowchart: [
          { num: 1, title: 'Sensory Screening', desc: 'Verify CN I and CN II visual and olfactory sensory paths.', details: 'Test olfactory capacity and perform visual field confrontation charts.', q: 'Which nerve is evaluated for sensory visual fields?', opts: ['CN I (Olfactory)', 'CN II (Optic)', 'CN III (Oculomotor)', 'CN IV (Trochlear)'], ans: 1 },
          { num: 2, title: 'Extraocular Movements', desc: 'Perform H-test targeting CN III, IV, and VI motor control.', details: 'Instruct patient to follow a finger in an H-shape to isolate eye movements.', q: 'Which nerve innervates the Superior Oblique muscle, rotating the eye down and in?', opts: ['CN III', 'CN IV', 'CN VI', 'CN V'], ans: 1 },
          { num: 3, title: 'Trigeminofacial Reflexes', desc: 'Assess CN V facial sensation and CN VII facial symmetry.', details: 'Test light touch across ophthalmic, maxillary, and mandibular zones, and assess facial expressions.', q: 'Which nerve mediates the sensory afferent limb of the corneal reflex?', opts: ['CN V (Trigeminal)', 'CN VII (Facial)', 'CN III', 'CN II'], ans: 0 },
          { num: 4, title: 'Auditory & Vagal Reflexes', desc: 'Test CN VIII hearing and CN IX/X palate movements.', details: 'Perform whisper test and check uvular alignment and gag reflex.', q: 'Palate elevation failure with uvula deviating to the left indicates damage to:', opts: ['Right CN IX', 'Right CN X', 'Left CN X', 'Left CN XII'], ans: 1 },
          { num: 5, title: 'Neck & Tongue Strength', desc: 'Test CN XI trapezius shrug and CN XII tongue alignment.', details: 'Apply resistance to shoulder shrugs and check for tongue deviations.', q: 'Which nerve is tested by asking the patient to protrude their tongue?', opts: ['CN X', 'CN XI', 'CN XII', 'CN IX'], ans: 2 }
        ],
        knowledgeMap: [
          { id: 'center', label: 'Cranial Nerves', x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 75 },
          { id: 'node1', label: 'CN V (Trigeminal)', x: 230, y: 80, size: 28, color: 'var(--secondary)', type: 'dep', progress: 80 },
          { id: 'node2', label: 'CN VII (Facial)', x: 380, y: 140, size: 28, color: 'var(--accent)', type: 'dep', progress: 85 }
        ],
        flashcards: [
          { q: 'Which cranial nerve provides taste to the anterior 2/3 of the tongue?', a: 'CN VII (Facial nerve, via chorda tympani).' }
        ],
        quiz: [
          {
            q: 'A patient presents with hoarseness and uvula deviation to the right. Which cranial nerve is damaged?',
            opts: ['Left CN X', 'Right CN X', 'Left CN IX', 'Right CN XII'],
            ans: 0,
            explain: 'CN X lesion causes the uvula to deviate away from the side of injury (deviates to the normal side).'
          }
        ],
        viva: [
          { q: 'Detail the functional pathway of the Trigeminal nerve (CN V).', a: 'CN V has three branches: V1 (Ophthalmic) and V2 (Maxillary) are sensory. V3 (Mandibular) is both sensory and motor (innervating muscles of mastication).' }
        ]
      },
      'Hepatic Anatomy': {
        title: 'Hepatic Anatomy',
        subject: 'Gastroenterology',
        overview: `<p><strong>Hepatic Anatomy</strong> details the structural divisions of the liver, its vascular portal system, and functional lobules (hepatocytes, bile canaliculi, hepatic sinusoids). The portal triad comprises the portal vein, hepatic artery, and bile duct.</p>`,
        pearl: 'The portal vein supplies 75% of the blood flow to the liver, carrying nutrient-rich blood from the gastrointestinal tract. Hepatic portal hypertension leads to varices.',
        takeaways: [
          'Anatomically divided into Right and Left lobes by the falciform ligament.',
          'Portal triad consists of Portal Vein, Hepatic Artery, and Bile Duct.',
          'Gallbladder stores bile produced by hepatocytes.',
          'Hepatic portal hypertension causes esophageal varices and splenomegaly.'
        ],
        mnemonic: {
          phrase: 'PV-HA-BD Triad',
          explain: 'P: Portal Vein, H: Hepatic Artery, B: Bile Duct (contents of the portal triad).'
        },
        accordions: [
          {
            title: 'Liver Lobes & Ligaments',
            content: `<p>Anatomy of Right, Left, Caudate, and Quadrate lobes divided by falciform folds.</p>`
          },
          {
            title: 'Portal Circulation System',
            content: `<p>Venous portal system gathering visceral blood from stomach, pancreas, and intestines.</p>`
          },
          {
            title: 'Biliary Secretion Pathway',
            content: `<p>Path of bile from hepatocytes to common bile duct and storage in gallbladder.</p>`
          }
        ],
        caseSimulation: {
          intro: 'A patient presents with hematemesis. History reveals liver cirrhosis and portal hypertension.',
          steps: [
            {
              doctor: 'Welcome Doctor. Collateral venous dilations are visible. What is the source of the vomiting?',
              options: [
                { text: 'Bleeding esophageal varices due to portal backup', correct: true, feedback: 'Correct! Retrograde pressure dilates esophageal collaterals.' },
                { text: 'Duodenal ulcer bleeding', correct: false, feedback: 'Incorrect. Splenic-portal backup specifically localizes varices to the lower esophagus.' }
              ]
            }
          ]
        },
        diagramLayers: ['Gallbladder', 'Hepatic Lobe Outlines'],
        diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Right Lobe -->
          <path d="M200 120 C280 120, 340 160, 320 250 C300 290, 220 290, 200 250 Z" fill="rgba(239, 68, 68, 0.04)" stroke="var(--primary)" stroke-width="2"/>
          <text x="260" y="190" fill="var(--text-secondary)" font-size="8" font-weight="bold" text-anchor="middle">Right Lobe</text>
          
          <!-- Left Lobe -->
          <path d="M200 120 C140 120, 80 140, 100 210 C120 250, 180 250, 200 250 Z" fill="rgba(239, 68, 68, 0.02)" stroke="var(--primary)" stroke-width="2"/>
          <text x="140" y="180" fill="var(--text-secondary)" font-size="8" font-weight="bold" text-anchor="middle">Left Lobe</text>
          
          <!-- Falciform Ligament -->
          <path d="M200 120 Q195 185 200 250" stroke="var(--secondary)" stroke-width="2" stroke-dasharray="3 3"/>
          
          <g id="layer-gallbladder">
            <path d="M230 255 Q240 280 250 280 Q260 280 250 255 Z" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2"/>
            <text x="250" y="295" fill="#10b981" font-size="7" font-weight="bold" text-anchor="middle">Gallbladder</text>
          </g>
          
          <g id="layer-portal-triad">
            <!-- Portal Vein -->
            <path d="M195 240 Q180 280 185 300" stroke="#3b82f6" stroke-width="4" fill="none"/>
            <!-- Hepatic Artery -->
            <path d="M203 240 Q195 285 200 300" stroke="#ef4444" stroke-width="2.5" fill="none"/>
            <!-- Bile Duct -->
            <path d="M210 240 Q215 270 230 260" stroke="#10b981" stroke-width="2" fill="none"/>
          </g>

          <g class="svg-hotspot" onclick="app.showHotspot('Porta Hepatis', 'Gateway fissure containing the Portal Triad: Hepatic Portal Vein, Hepatic Artery Proper, and Common Hepatic Duct.')">
            <circle cx="200" cy="235" r="5"/>
            <text x="195" y="230" class="svg-hotspottext" text-anchor="end">Porta Hepatis</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Gallbladder', 'Concentrates and stores hepatic bile, contracting in response to CCK to aid lipid emulsification.')">
            <circle cx="250" cy="270" r="5"/>
            <text x="258" y="273" class="svg-hotspottext" text-anchor="start">Gallbladder</text>
          </g>
          <g class="svg-hotspot" onclick="app.showHotspot('Falciform Ligament', 'Peritoneal fold that connects the liver to the anterior abdominal wall and separates left and right lobes.')">
            <circle cx="200" cy="170" r="5"/>
            <text x="205" y="165" class="svg-hotspottext" text-anchor="start">Falciform Lig</text>
          </g>
        </svg>`,
        flowchart: [
          { num: 1, title: 'Hepatocyte Secretion', desc: 'Hepatocytes produce bile acids from cholesterol.', details: 'Hepatocytes synthesize bile salts, cholesterol, and bilirubin, secreting them into tiny bile canaliculi.', q: 'Which organelle in hepatocytes synthesizes bile acids from cholesterol?', opts: ['Lysosome', 'Smooth Endoplasmic Reticulum', 'Mitochondria', 'Ribosome'], ans: 1 },
          { num: 2, title: 'Bile Canaliculi Drainage', desc: 'Bile flows through canaliculi into portal triads.', details: 'Canaliculi empty into terminal bile ductules, which lead to interlobular bile ducts situated in portal triads.', q: 'What three structures compose the portal triad?', opts: ['Portal vein, hepatic vein, central vein', 'Portal vein, hepatic artery proper, bile duct', 'Hepatic artery, gallbladder duct, pancreatic duct', 'Sinusoid, canaliculus, central vein'], ans: 1 },
          { num: 3, title: 'Hepatic Duct Transport', desc: 'Right & Left hepatic ducts merge to common duct.', details: 'Bile drains from lobule segments, accumulating in the common hepatic duct.', q: 'Right and left hepatic ducts merge to form which duct?', opts: ['Common Bile Duct', 'Common Hepatic Duct', 'Cystic Duct', 'Pancreatic Duct'], ans: 1 },
          { num: 4, title: 'Gallbladder Storage', desc: 'Cystic duct routes bile to gallbladder for concentration.', details: 'During fasting, the Sphincter of Oddi is closed, redirecting bile through the cystic duct into the gallbladder.', q: 'Which hormone contracts the gallbladder to release stored bile?', opts: ['Secretin', 'Gastrin', 'Cholecystokinin (CCK)', 'Somatostatin'], ans: 2 },
          { num: 5, title: 'Duodenal Release', desc: 'Gallbladder contracts, ejecting bile to duodenum.', details: 'Fat ingestion triggers Cholecystokinin (CCK) release, relaxing the Sphincter of Oddi and contracting the gallbladder.', q: 'Bile enters the duodenum through which muscular structure?', opts: ['Pyloric Sphincter', 'Sphincter of Oddi', 'Ileocecal Valve', 'Cardiac Sphincter'], ans: 1 }
        ],
        knowledgeMap: [
          { id: 'center', label: 'Hepatic Anatomy', x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 80 },
          { id: 'node1', label: 'Portal Triad', x: 230, y: 80, size: 28, color: 'var(--secondary)', type: 'dep', progress: 90 },
          { id: 'node2', label: 'Gallbladder', x: 380, y: 140, size: 28, color: 'var(--accent)', type: 'dep', progress: 75 }
        ],
        flashcards: [
          { q: 'What structures form the portal triad?', a: 'Portal vein, hepatic artery, and common bile duct.' }
        ],
        quiz: [
          {
            q: 'Which lobe of the liver is situated on the posteroinferior surface, next to the gallbladder?',
            opts: ['Quadrate Lobe', 'Caudate Lobe', 'Left Lobe', 'Falciform Lobe'],
            ans: 0,
            explain: 'The quadrate lobe is adjacent to the gallbladder fossa; caudate is posterosuperior near the IVC.'
          }
        ],
        viva: [
          { q: 'What is portal hypertension and its anatomical consequences?', a: 'Resistance to portal flow leads to pressure backup, causing splenomegaly and collateral dilations (varices) at portosystemic anastomoses (esophagus, umbilicus, rectum).' }
        ]
      }
    };

    // Concept comparison selector database
    this.comparisonDb = {
      'ai_vs_ml': {
        conceptA: 'STEMI (ST-Elevation MI)',
        conceptB: 'NSTEMI (Non-ST-Elevation MI)',
        features: [
          { name: 'Artery Occlusion', valA: 'Complete transmural coronary artery occlusion (100% blocked).', valB: 'Subtotal or transient subendocardial occlusion.' },
          { name: 'ECG Findings', valA: 'ST-segment elevations and hyperacute T waves, later Q waves.', valB: 'ST depressions, T-wave inversions, or no changes.' },
          { name: 'Myocardial Damage', valA: 'Transmural necrosis (full thickness of the cardiac wall).', valB: 'Subendocardial necrosis (inner 1/3 of the wall thickness).' },
          { name: 'PCI Emergency', valA: 'Immediate emergency reperfusion (PCI within 90 minutes door-to-balloon).', valB: 'Invasive angiogram risk-stratified (24-72 hours).' }
        ]
      },
      'sql_vs_nosql': {
        conceptA: 'Pre-clinical Phase',
        conceptB: 'Clinical Phase',
        features: [
          { name: 'Focus Subjects', valA: 'Anatomy, Physiology, and Biochemistry.', valB: 'Medicine, Surgery, OBGYN, Pediatrics, Orthopedics, etc.' },
          { name: 'Primary Method', valA: 'Laboratory dissections, tissue slides, metabolic paths.', valB: 'Ward rounds, patient history taking, clinical trials.' },
          { name: 'Target Focus', valA: 'Basic human body biology and normal homeostatic baselines.', valB: 'Pathology diagnoses, surgical repairs, pharmacological cures.' }
        ]
      },
      'tcp_vs_udp': {
        conceptA: 'Beta-1 Selective Blockers',
        conceptB: 'Non-Selective Beta Blockers',
        features: [
          { name: 'Receptor Focus', valA: 'Preferentially bind Beta-1 receptors in myocardial tissue.', valB: 'Equivalently block Beta-1 (heart) and Beta-2 (bronchioles/vascular).' },
          { name: 'Lung Safety', valA: 'Relatively safe in asthma and COPD at standard doses.', valB: 'Contraindicated in asthma/COPD due to severe bronchoconstriction risk.' },
          { name: 'Examples', valA: 'Metoprolol, Atenolol, Esmolol, Bisoprolol.', valB: 'Propranolol, Timolol, Nadolol, Sotalol.' }
        ]
      },
      'mitosis_vs_meiosis': {
        conceptA: 'Ischemic Stroke',
        conceptB: 'Hemorrhagic Stroke',
        features: [
          { name: 'Etiology', valA: 'Atherothrombotic occlusion or cardioembolism in cerebral vessel.', valB: 'Rupture of cerebral blood vessel (e.g. aneurysms, hypertension).' },
          { name: 'Imaging Check', valA: 'Non-contrast CT scan shows no hemorrhage (normal in early hours).', valB: 'Non-contrast CT scan immediately shows hyperdense bleeding.' },
          { name: 'Thrombolysis (tPA)', valA: 'Highly indicated within 4.5 hours of symptom onset.', valB: 'Strictly contraindicated; worsens bleeding and causes fatal brain herniation.' }
        ]
      }
    };

    // Symptom reasoning pathways database
    this.symptomDb = {
      'Chest Pain': {
        guidance: 'Evaluate for red flags (diaphoresis, radiation, hypotension). Rule out ACS and aortic dissection immediately.',
        nodes: [
          { num: 1, title: 'Step 1: Check Vitals & ECG', desc: 'Assess blood pressure, heart rate, and obtain a 12-lead ECG within 10 minutes.' },
          { num: 2, title: 'Step 2: Biomarker Assay', desc: 'Check troponins, CK-MB, and inflammatory markers if ischemic signs are present.' },
          { num: 3, title: 'Step 3: Risk Stratification', desc: 'Classify as STEMI, NSTEMI, or unstable angina, and route to catheterization lab.' }
        ],
        diffs: [
          { name: 'Acute Myocardial Infarction', percent: 45 },
          { name: 'Aortic Dissection', percent: 15 },
          { name: 'Pulmonary Embolism', percent: 20 },
          { name: 'GERD / Esophagitis', percent: 20 }
        ]
      },
      'Dyspnea': {
        guidance: 'Determine onset speed. Check breath sounds for wheezing or crackles. Screen for respiratory vs cardiac origins.',
        nodes: [
          { num: 1, title: 'Step 1: SpO2 & Auscultation', desc: 'Assess oxygen saturation. Auscultate for bilateral crackles or wheezes.' },
          { num: 2, title: 'Step 2: Chest Radiograph', desc: 'Order Chest X-ray to differentiate pneumonia, pneumothorax, or pulmonary edema.' },
          { num: 3, title: 'Step 3: Arterial Blood Gas', desc: 'Perform ABG to check pH, PaCO2, and rule out acute respiratory acidosis or alkalosis.' }
        ],
        diffs: [
          { name: 'Pneumonia / Bronchitis', percent: 35 },
          { name: 'Acute Heart Failure / Pulmonary Edema', percent: 30 },
          { name: 'COPD / Asthma Exacerbation', percent: 25 },
          { name: 'Pneumothorax', percent: 10 }
        ]
      },
      'Acute Headache': {
        guidance: 'Check for sudden "thunderclap" onset (subarachnoid hemorrhage warning). Review neurological focal signs.',
        nodes: [
          { num: 1, title: 'Step 1: Neurological Exam', desc: 'Assess pupil symmetry, neck rigidity (meningismus), and cranial nerve functions.' },
          { num: 2, title: 'Step 2: Non-contrast Brain CT', desc: 'Urgent CT scan to evaluate for hyperdense hemorrhage before performing lumbar puncture.' },
          { num: 3, title: 'Step 3: Lumbar Puncture', desc: 'If CT is negative but thunderclap is highly suspected, analyze CSF for xanthochromia.' }
        ],
        diffs: [
          { name: 'Migraine / Tension Headache', percent: 60 },
          { name: 'Subarachnoid Hemorrhage', percent: 15 },
          { name: 'Meningitis / Encephalitis', percent: 15 },
          { name: 'Intracranial Mass / Neoplasm', percent: 10 }
        ]
      },
      'Acute Abdominal Pain': {
        guidance: 'Localize pain quadrant. Guarding or rebound tenderness suggests peritonitis requiring urgent surgical consult.',
        nodes: [
          { num: 1, title: 'Step 1: Localize Pain Quadrant', desc: 'Right lower quadrant (RLQ) tenderness points to appendicitis; RUQ to cholecystitis.' },
          { num: 2, title: 'Step 2: Ultrasound / CT Scan', desc: 'Request abdominal ultrasound (first-line for gallbladder/pelvic) or CT with contrast.' },
          { num: 3, title: 'Step 3: Surgical Triage', desc: 'Assess Alvarado score or surgical indications. Place patient NPO (nil per os).' }
        ],
        diffs: [
          { name: 'Acute Appendicitis', percent: 40 },
          { name: 'Cholecystitis', percent: 25 },
          { name: 'Gastroenteritis', percent: 20 },
          { name: 'Bowel Obstruction', percent: 15 }
        ]
      }
    };

    // Canvas Knowledge Map states
    this.canvasNodes = [];
    this.canvasLinks = [];
    this.selectedMapNode = null;
    this.draggedMapNode = null;
    this.mapGravity = 0.05;

    // Flashcards tracker
    this.fcIdx = 0;

    // Quiz tracker
    this.quizIdx = 0;
    this.quizScore = 0;
    this.quizActive = true;
    this.quizAnswersSelected = [];

    // Case tracker
    this.caseStepIdx = 0;
    this.caseHistory = [];
  }

  init() {
    this.initTheme();
    this.bindEvents();
    this.setupComparisonOptions();
    
    // Default load
    this.loadTopic('Myocardial Infarction', false);
    this.initCanvasMap();
    this.loadSymptom('Chest Pain');
    this.updateXPStats();
  }

  bindEvents() {
    // Splash screen CTA
    const startBtn = document.getElementById('start-exploring-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        document.body.classList.add('started');
      });
    }

    // Sidebar navigation routing
    const navItems = document.querySelectorAll('.sidebar-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        this.switchPanel(target);
      });
    });

    // Search query submit (AI Workspace)
    const searchSubmit = document.getElementById('workspace-search-submit');
    if (searchSubmit) {
      searchSubmit.addEventListener('click', () => {
        const q = document.getElementById('workspace-search-input').value.trim();
        if (q) this.handleSearchSubmit(q);
      });
    }

    const searchInput = document.getElementById('workspace-search-input');
    if (searchInput) {
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const q = searchInput.value.trim();
          if (q) this.handleSearchSubmit(q);
        }
      });
    }

    // Notes exporter click handler
    const notesExportBtn = document.getElementById('notes-export-btn');
    if (notesExportBtn) {
      notesExportBtn.addEventListener('click', () => {
        this.copyMnemonicMarkdown();
      });
    }

    // Zoom controls for Diagram Studio
    let diagramZoom = 1.0;
    const zoomInBtn = document.querySelector('#panel-diagram-studio .map-controls button[title="Zoom In"]');
    const zoomOutBtn = document.querySelector('#panel-diagram-studio .map-controls button[title="Zoom Out"]');
    const resetZoomBtn = document.querySelector('#panel-diagram-studio .map-controls button[title="Reset Layout"]');

    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', () => {
        diagramZoom += 0.1;
        const svg = document.querySelector('#diagram-canvas-wrap svg');
        if (svg) svg.style.transform = `scale(${diagramZoom})`;
      });
    }

    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', () => {
        diagramZoom = Math.max(0.5, diagramZoom - 0.1);
        const svg = document.querySelector('#diagram-canvas-wrap svg');
        if (svg) svg.style.transform = `scale(${diagramZoom})`;
      });
    }

    if (resetZoomBtn) {
      resetZoomBtn.addEventListener('click', () => {
        diagramZoom = 1.0;
        const svg = document.querySelector('#diagram-canvas-wrap svg');
        if (svg) {
          svg.style.transform = `scale(1.0)`;
          svg.style.transformOrigin = 'center';
        }
      });
    }
  }

  switchPanel(panelId) {
    this.activePanel = panelId;
    
    // Panel class changes
    const panels = document.querySelectorAll('.content-panel');
    panels.forEach(p => p.classList.remove('active'));

    const targetPanel = document.getElementById(`panel-${panelId}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }

    // Sidebar active item class sync
    const navItems = document.querySelectorAll('.sidebar-item');
    navItems.forEach(item => {
      if (item.getAttribute('data-target') === panelId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Special triggers upon opening panels
    if (panelId === 'learning-categories') {
      // General categories view
    } else if (panelId === 'library') {
      this.renderLibrary();
    } else if (panelId === 'progress-analytics') {
      this.renderActivityLogs();
    } else if (panelId === 'profile') {
      this.renderProfile();
      this.initTheme(); // Sync theme button visual active states
    } else if (panelId === 'flashcards') {
      const topic = this.topicsDb[this.currentTopic];
      if (topic && topic.flashcards) {
        this.fcIdx = 0;
        this.showFlashcard(topic.flashcards);
      }
    } else if (panelId === 'case-learning') {
      const topic = this.topicsDb[this.currentTopic];
      if (topic && topic.caseSimulation) {
        this.initCaseDiscussion(topic.caseSimulation);
      }
    } else if (panelId === 'flowchart-studio') {
      const topic = this.topicsDb[this.currentTopic];
      if (topic) {
        this.renderFlowchart(topic);
      }
    } else if (panelId === 'symptom-navigator') {
      this.loadSymptom('Chest Pain');
    } else if (panelId === 'concept-maps' || panelId === 'knowledge-engine') {
      this.renderRoadmap(this.currentSubject, 'knowledge-roadmap-root');
      this.renderRoadmap(this.currentSubject, 'knowledge-roadmap-root-legacy');
      setTimeout(() => this.resizeCanvasMap(), 50);
    }
  }

  loadCategory(phaseName) {
    const titleEl = document.getElementById('subject-explorer-title');
    if (titleEl) {
      const phaseTitle = phaseName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      titleEl.innerText = `${phaseTitle} Phase Subjects`;
    }
    
    const grid = document.getElementById('subject-explorer-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = this.subjectsDb.filter(sub => sub.phase === phaseName);

    filtered.forEach(sub => {
      const card = document.createElement('div');
      card.className = 'glass-card rec-card';
      card.style.cursor = 'pointer';
      
      let badgeLabel = sub.phase.replace('-', ' ');
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
          <span class="subject-badge ${sub.phase}" style="font-size:0.7rem; font-weight:700; text-transform:uppercase; padding:2px 8px; border-radius:20px; background:rgba(99,102,241,0.1); color:var(--primary);">${badgeLabel}</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">${sub.count} Topics</span>
        </div>
        <h3 style="margin-top:12px; font-weight:700; color:var(--text-primary);">${sub.name}</h3>
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:8px; line-height:1.4;">${sub.desc}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-top:16px; font-size:0.8rem; font-weight:600; color:var(--primary);">
          <span>Explore Subject</span>
          <span>→</span>
        </div>
      `;

      card.onclick = () => {
        const currentSub = sub.name;
        this.currentSubject = currentSub;
        
        let topics = this.subjectTopicsDb[currentSub];
        if (!topics) {
          topics = [`${currentSub} Pathology`, `${currentSub} Core Principles`];
          this.subjectTopicsDb[currentSub] = topics;
          topics.forEach(t => {
            if (!this.topicsDb[t]) this.topicsDb[t] = this.generateDynamicMedicalTopic(t, currentSub);
          });
        }
        
        this.loadTopic(topics[0], true);
      };

      grid.appendChild(card);
    });

    this.switchPanel('subject-explorer');
  }

  // Load selected topic into workspace
  loadTopic(topicName, shouldSwitch = true) {
    const topic = this.topicsDb[topicName];
    if (!topic) return;

    this.currentTopic = topicName;
    this.currentSubject = topic.subject;

    // Header updates in Structured Learning
    const slTitle = document.getElementById('sl-topic-title');
    if (slTitle) slTitle.innerText = topic.title;

    const slSub = document.getElementById('sl-topic-subtitle');
    if (slSub) slSub.innerText = `${topic.subject} — MBBS Curriculum Block`;

    // Update bookmark status
    const bkmBtn = document.getElementById('topic-bookmark-btn');
    if (bkmBtn) {
      if (this.bookmarkedTopics.includes(topicName)) {
        bkmBtn.classList.add('active');
      } else {
        bkmBtn.classList.remove('active');
      }
    }

    // 1. Text Outline / Overview
    const slOverview = document.getElementById('sl-topic-overview');
    if (slOverview) slOverview.innerHTML = topic.overview;
    
    const slPearl = document.getElementById('sl-pearl-text');
    if (slPearl) slPearl.innerText = topic.pearl;
    
    const slTkList = document.getElementById('sl-takeaways');
    if (slTkList) {
      slTkList.innerHTML = '';
      topic.takeaways.forEach(tk => {
        const li = document.createElement('li');
        li.className = 'takeaway-item';
        li.innerText = tk;
        slTkList.appendChild(li);
      });
    }

    // 2. Accordions Generation
    const slAccBox = document.getElementById('sl-accordions');
    if (slAccBox) {
      slAccBox.innerHTML = '';
      if (topic.accordions) {
        topic.accordions.forEach((acc, idx) => {
          const item = document.createElement('div');
          item.className = 'accordion-item';
          item.innerHTML = `
            <div class="accordion-header" onclick="app.toggleAccordion(this)">
              <div class="accordion-header-left">
                <span class="accordion-num">0${idx + 1}</span>
                <span>${acc.title}</span>
              </div>
              <span class="accordion-chevron">▼</span>
            </div>
            <div class="accordion-content">
              ${acc.content}
            </div>
          `;
          slAccBox.appendChild(item);
        });
      }
    }

    // 3. Related Concepts
    const slRelatedBox = document.getElementById('sl-related-chips');
    if (slRelatedBox) {
      slRelatedBox.innerHTML = '';
      const related = this.subjectTopicsDb[topic.subject] || [];
      related.forEach(r => {
        if (r !== topicName) {
          const chip = document.createElement('span');
          chip.className = 'preset-chip';
          chip.innerText = r;
          chip.onclick = () => this.loadTopic(r, true);
          slRelatedBox.appendChild(chip);
        }
      });
    }

    // 4. Diagram Studio & Knowledge Engine right panel
    const diagWrap = document.getElementById('diagram-canvas-wrap');
    if (diagWrap) diagWrap.innerHTML = topic.diagramSvg;

    const engDiagWrap = document.getElementById('engine-diagram-svg-wrap');
    if (engDiagWrap) engDiagWrap.innerHTML = topic.diagramSvg;

    const engDiagBadge = document.getElementById('engine-diagram-badge');
    if (engDiagBadge) {
      let organ = 'Heart';
      if (topicName.includes('Stroke') || topicName.includes('Cranial')) organ = 'Brain';
      else if (topicName.includes('Appendicitis')) organ = 'Cecum / Appendix';
      else if (topicName.includes('Nephron') || topicName.includes('Kidney')) organ = 'Kidney';
      else if (topicName.includes('Asthma') || topicName.includes('Lung')) organ = 'Lungs';
      else if (topicName.includes('Hepatic') || topicName.includes('Liver')) organ = 'Liver';
      else if (topicName.includes('Blockers')) organ = 'Receptors';
      else organ = 'General Pathology';
      engDiagBadge.innerText = organ;
    }

    const engDiagDesc = document.getElementById('engine-diagram-desc');
    if (engDiagDesc) {
      engDiagDesc.innerText = `Visual anatomical representation for ${topic.title}.`;
    }

    const diagSub = document.getElementById('diag-subtitle');
    if (diagSub) diagSub.innerText = `${topic.subject} — Anatomical & Pathological Layers`;

    const layersBox = document.getElementById('diag-layers-container');
    if (layersBox) {
      layersBox.innerHTML = '';
      topic.diagramLayers.forEach((lay, idx) => {
        const btn = document.createElement('button');
        btn.className = 'layer-toggle-btn active';
        btn.innerHTML = `
          <span>${lay}</span>
          <div class="layer-indicator"></div>
        `;
        btn.onclick = () => this.toggleDiagramLayer(btn, idx);
        layersBox.appendChild(btn);
      });
    }
    this.resetHotspotInfo();

    // 5. Flowchart Studio Setup
    this.renderFlowchart(topic);

    // 6. Map Setup
    this.setupMapNodes(topic.knowledgeMap);

    // 7. Flashcards setup
    this.fcIdx = 0;
    this.showFlashcard(topic.flashcards);

    // 8. Quiz Setup
    this.quizIdx = 0;
    this.quizScore = 0;
    this.quizActive = true;
    this.quizAnswersSelected = [];

    // 9. Mnemonics (in Smart Notes)
    const mPhrase = document.getElementById('notes-mnemonic-phrase');
    if (mPhrase) mPhrase.innerText = topic.mnemonic.phrase;
    
    const mExplain = document.getElementById('notes-mnemonic-explain');
    if (mExplain) mExplain.innerText = topic.mnemonic.explain;

    const nTitle = document.getElementById('notes-title');
    if (nTitle) nTitle.value = `Study Revision: ${topic.title}`;

    const nBody = document.getElementById('notes-markdown-body');
    if (nBody) {
      nBody.innerHTML = `
        <h2>High-Yield Revision: ${topic.title}</h2>
        <p><strong>Etiology</strong>: Blockage or dysfunction of primary cells and vascular vessels leads to systemic outcomes.</p>
        <ul>
          <li>First Line Actions: Check baseline markers, order clinical tests (ECG, Troponins, CT scans).</li>
          <li>Therapy Rules: Introduce selective drugs based on receptor targets.</li>
        </ul>
        <p>${topic.pearl}</p>
      `;
    }

    if (shouldSwitch) {
      this.switchPanel('topic-learning');
    }
  }

  // Accordion Toggling
  toggleAccordion(headerElement) {
    const item = headerElement.parentElement;
    const isOpen = item.classList.contains('open');
    
    const parentList = item.parentElement;
    const items = parentList.querySelectorAll('.accordion-item');
    items.forEach(i => {
      i.classList.remove('open');
      const content = i.querySelector('.accordion-content');
      if (content) content.style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('open');
      const content = item.querySelector('.accordion-content');
      if (content) content.style.maxHeight = content.scrollHeight + 'px';
    }
  }

  // Bookmark toggling
  toggleCurrentBookmark() {
    const topicName = this.currentTopic;
    const btn = document.getElementById('topic-bookmark-btn');
    
    if (this.bookmarkedTopics.includes(topicName)) {
      this.bookmarkedTopics = this.bookmarkedTopics.filter(t => t !== topicName);
      if (btn) btn.classList.remove('active');
    } else {
      this.bookmarkedTopics.push(topicName);
      if (btn) btn.classList.add('active');
    }

    this.renderLibrary();
  }

  copyMnemonicMarkdown() {
    const editor = document.getElementById('notes-markdown-body');
    if (!editor) return;
    const text = editor.innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert('Markdown notes copied to clipboard!');
    });
  }

  changeNotesLayout(layoutName, btnEl) {
    const btns = document.querySelectorAll('.notes-layout-selectors button');
    btns.forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    const topic = this.topicsDb[this.currentTopic];
    const nBody = document.getElementById('notes-markdown-body');
    if (!nBody || !topic) return;

    if (layoutName === 'outline') {
      nBody.innerHTML = `
        <h2>High-Yield Revision: ${topic.title}</h2>
        <p><strong>Etiology</strong>: Blockage or dysfunction of primary cells and vascular vessels leads to systemic outcomes.</p>
        <ul>
          <li>First Line Actions: Check baseline markers, order clinical tests (ECG, Troponins, CT scans).</li>
          <li>Therapy Rules: Introduce selective drugs based on receptor targets.</li>
        </ul>
        <p>${topic.pearl}</p>
      `;
    } else if (layoutName === 'cornell') {
      nBody.innerHTML = `
        <div style="display: flex; gap: 20px; border-bottom: 1px solid var(--card-border); padding-bottom: 12px; margin-bottom: 12px;">
          <div style="flex: 1; border-right: 1px solid var(--card-border); padding-right: 20px;">
            <h3>Cue Column</h3>
            <p><strong>Key Questions:</strong></p>
            <ul>
              <li>What triggers the pathophysiology?</li>
              <li>What is the first-line diagnostic test?</li>
              <li>What is the main therapeutic drug or procedure?</li>
            </ul>
          </div>
          <div style="flex: 2;">
            <h3>Lecture Notes</h3>
            <p><strong>Pathophysiology:</strong> ${topic.overview}</p>
            <p><strong>Clinical pearl:</strong> ${topic.pearl}</p>
          </div>
        </div>
        <div>
          <h3>Summary</h3>
          <p>${topic.takeaways.join(' ')}</p>
        </div>
      `;
    } else if (layoutName === 'summary') {
      nBody.innerHTML = `
        <h2>Cheatsheet: ${topic.title}</h2>
        <table style="width:100%; border-collapse:collapse; margin-top:10px;" border="1" cellpadding="6">
          <tr style="background:var(--bg-tertiary);">
            <th>Core Concept</th>
            <th>High-Yield Takeaway</th>
          </tr>
          <tr>
            <td><strong>Etiology & Diffs</strong></td>
            <td>${topic.takeaways[0]}</td>
          </tr>
          <tr>
            <td><strong>Primary Diagnostics</strong></td>
            <td>${topic.takeaways[1]}</td>
          </tr>
          <tr>
            <td><strong>Treatment Rules</strong></td>
            <td>${topic.takeaways[2]}</td>
          </tr>
          <tr>
            <td><strong>Clinical Warning</strong></td>
            <td>${topic.pearl}</td>
          </tr>
        </table>
      `;
    }
  }

  // Diagram Layer Toggle
  toggleDiagramLayer(btnElement, index) {
    btnElement.classList.toggle('active');
    
    // Fetch target layer IDs from active SVGs
    const layerIds = ['layer-myocardial-tissue-necrosis', 'layer-occluded-artery-vessel', 'layer-left-ventricle-chambers'];
    const brainIds = ['layer-ischemic-penumbra-territory', 'layer-occluded-cerebral-artery', 'layer-brain-cortical-hemispheres'];
    const appendixIds = ['layer-inflamed-appendiceal-wall', 'layer-obstructing-fecalith-core', 'layer-cecum-junction-lumen'];
    const receptorIds = ['layer-g-protein-receptor-complex', 'layer-intracellular-camp-cascade', 'layer-myocyte-calcium-channels'];
    const diabetesIds = ['layer-insulin-receptor-down-regulation', 'layer-pancreatic-beta-cell-exhaustion', 'layer-glomerular-basement-thickening'];
    const asthmaIds = ['layer-bronchial-smooth-muscle-spasm', 'layer-mucosal-edema-influx', 'layer-alveolar-hyperinflation'];
    const heartAnatomyIds = ['layer-coronary-arteries', 'layer-myocardial-wall-chambers', 'layer-cardiac-valves'];
    const nephronIds = ['layer-collecting-duct', 'layer-loop-of-henle', 'layer-glomerulus-and-bowman'];
    const cranialNervesIds = ['layer-cn-x-fibers', 'layer-cn-v-fibers', 'layer-brainstem-nuclei'];
    const hepaticAnatomyIds = ['layer-gallbladder', 'layer-hepatic-lobe-outlines'];

    let activeList = layerIds;
    if (this.currentTopic === 'Cerebral Stroke') {
      activeList = brainIds;
    } else if (this.currentTopic === 'Acute Appendicitis') {
      activeList = appendixIds;
    } else if (this.currentTopic === 'Beta Blockers') {
      activeList = receptorIds;
    } else if (this.currentTopic === 'Diabetes Mellitus') {
      activeList = diabetesIds;
    } else if (this.currentTopic === 'Asthma') {
      activeList = asthmaIds;
    } else if (this.currentTopic === 'Heart Anatomy') {
      activeList = heartAnatomyIds;
    } else if (this.currentTopic === 'Nephron') {
      activeList = nephronIds;
    } else if (this.currentTopic === 'Cranial Nerves') {
      activeList = cranialNervesIds;
    } else if (this.currentTopic === 'Hepatic Anatomy') {
      activeList = hepaticAnatomyIds;
    }

    const targetId = activeList[index];
    const layerEl = document.getElementById(targetId);
    if (layerEl) {
      if (btnElement.classList.contains('active')) {
        layerEl.style.opacity = '1';
      } else {
        layerEl.style.opacity = '0.08';
      }
    }
  }

  showHotspot(title, description) {
    const boxes = document.querySelectorAll('#diag-hotspot-info, #engine-hotspot-info');
    boxes.forEach(box => {
      box.innerHTML = `
        <div class="anatomy-info-title" style="color: var(--accent); font-weight:700;">${title}</div>
        <div class="anatomy-info-desc" style="margin-top:4px;">${description}</div>
      `;
      box.style.borderColor = 'var(--accent)';
      box.style.background = 'rgba(6, 182, 212, 0.04)';
    });
  }

  resetHotspotInfo() {
    const boxes = document.querySelectorAll('#diag-hotspot-info, #engine-hotspot-info');
    boxes.forEach(box => {
      box.innerHTML = `
        <div class="anatomy-info-title" style="font-weight:700;">Diagram Control</div>
        <div class="anatomy-info-desc" style="margin-top:4px;">Click glowing points or regions in the diagram to inspect tissue segments and pathology.</div>
      `;
      box.style.borderColor = 'var(--card-border)';
      box.style.background = 'rgba(255, 255, 255, 0.02)';
    });
  }

  // Flowchart node toggling
  toggleFlowchartNode(cardElement, index) {
    const cards = document.querySelectorAll('#flowchart-nodes-wrap .flowchart-node-card');
    cards.forEach(c => c.classList.remove('active'));

    const drawers = document.querySelectorAll('#flowchart-nodes-wrap .node-details-drawer');
    drawers.forEach(d => d.style.display = 'none');

    cardElement.classList.add('active');
    const target = document.getElementById(`flow-drawer-${index}`);
    if (target) target.style.display = 'block';
  }

  // Check flowchart answers
  checkFlowAnswer(btnElement, nodeIdx, optIdx, answerIdx) {
    const btns = btnElement.parentElement.querySelectorAll('.checkpoint-opt-btn');
    btns.forEach(b => {
      b.disabled = true;
      b.classList.remove('correct', 'wrong');
    });

    if (optIdx === answerIdx) {
      btnElement.classList.add('correct');
      this.userXP += 10;
      this.updateXPStats();
    } else {
      btnElement.classList.add('wrong');
      btns[answerIdx].classList.add('correct');
    }
  }

  // Case study simulator controls
  initCaseDiscussion(caseSim) {
    this.caseStepIdx = 0;
    this.caseHistory = [];
    this.currentScenarioIdx = 0;
    
    // Set default filter based on active topic's subject if available
    const activeTopic = this.topicsDb[this.currentTopic];
    if (activeTopic && activeTopic.subject) {
      const spec = activeTopic.subject;
      if (['Cardiology', 'Endocrinology', 'Nephrology'].includes(spec)) {
        this.caseSpecialtyFilter = spec;
        const filterContainer = document.getElementById('case-specialty-filters');
        if (filterContainer) {
          const chips = filterContainer.querySelectorAll('.badge-chip');
          chips.forEach(chip => {
            if (chip.innerText === spec) {
              chip.classList.add('active');
            } else {
              chip.classList.remove('active');
            }
          });
        }
      } else {
        this.caseSpecialtyFilter = 'all';
        const filterContainer = document.getElementById('case-specialty-filters');
        if (filterContainer) {
          const chips = filterContainer.querySelectorAll('.badge-chip');
          chips.forEach(chip => {
            if (chip.innerText === 'All') {
              chip.classList.add('active');
            } else {
              chip.classList.remove('active');
            }
          });
        }
      }
    } else {
      this.caseSpecialtyFilter = 'all';
    }
    
    const searchInput = document.getElementById('case-search-input');
    if (searchInput) searchInput.value = '';
    const diffSelect = document.getElementById('case-difficulty-select');
    if (diffSelect) diffSelect.value = 'all';

    this.updatePatientChart();
    this.filterScenarios();
  }

  getAllScenarios() {
    const list = [];
    for (const topicKey in this.topicsDb) {
      const topic = this.topicsDb[topicKey];
      const caseSim = topic.caseSimulation;
      if (!caseSim) continue;
      
      if (caseSim.scenarios) {
        caseSim.scenarios.forEach((scen, idx) => {
          list.push({
            ...scen,
            topicKey: topicKey,
            specialty: topic.subject || 'General',
            difficulty: scen.difficulty || (idx === 0 ? 'Beginner' : idx === 1 ? 'Intermediate' : 'Advanced')
          });
        });
      } else {
        list.push({
          id: topicKey.toLowerCase().replace(/\s+/g, '-'),
          title: `${topic.title} Evaluation`,
          intro: caseSim.intro,
          steps: caseSim.steps,
          patient: caseSim.patient,
          differentials: caseSim.differentials,
          investigations: caseSim.investigations,
          management: caseSim.management,
          aiInsights: caseSim.aiInsights,
          topicKey: topicKey,
          specialty: topic.subject || 'General',
          difficulty: caseSim.difficulty || 'Intermediate'
        });
      }
    }
    return list;
  }

  filterScenarios() {
    const searchInput = document.getElementById('case-search-input');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const diffSelect = document.getElementById('case-difficulty-select');
    const diffVal = diffSelect ? diffSelect.value : 'all';
    
    const allScenarios = this.getAllScenarios();
    const filtered = allScenarios.filter(scen => {
      if (this.caseSpecialtyFilter !== 'all' && scen.specialty !== this.caseSpecialtyFilter) {
        return false;
      }
      if (diffVal !== 'all' && scen.difficulty !== diffVal) {
        return false;
      }
      if (query) {
        const matchesTitle = scen.title.toLowerCase().includes(query);
        const matchesIntro = scen.intro.toLowerCase().includes(query);
        const matchesTopic = scen.topicKey.toLowerCase().includes(query);
        const matchesSpecialty = scen.specialty.toLowerCase().includes(query);
        return matchesTitle || matchesIntro || matchesTopic || matchesSpecialty;
      }
      return true;
    });

    this.renderScenarioSelectorList(filtered);
  }

  setSpecialtyFilter(specialty, element) {
    this.caseSpecialtyFilter = specialty;
    const filterContainer = document.getElementById('case-specialty-filters');
    if (filterContainer) {
      const chips = filterContainer.querySelectorAll('.badge-chip');
      chips.forEach(chip => chip.classList.remove('active'));
    }
    if (element) {
      element.classList.add('active');
    }
    this.filterScenarios();
  }

  renderScenarioSelectorList(scenarios) {
    const chatBox = document.getElementById('case-chat-box');
    const optionsBox = document.getElementById('case-options-box');
    if (!chatBox || !optionsBox) return;

    chatBox.innerHTML = `
      <div class="case-bubble system" style="width: 100%;">
        <strong>Clinical Case Selector</strong><br>
        Select a patient scenario below to start your diagnostic simulation.
      </div>
    `;

    optionsBox.innerHTML = '';
    
    const selectorContainer = document.createElement('div');
    selectorContainer.style.display = 'flex';
    selectorContainer.style.flexDirection = 'column';
    selectorContainer.style.gap = '10px';
    selectorContainer.style.width = '100%';
    selectorContainer.style.marginTop = '10px';

    if (scenarios.length === 0) {
      const emptyMsg = document.createElement('div');
      emptyMsg.style.fontSize = '0.8rem';
      emptyMsg.style.color = 'var(--text-muted)';
      emptyMsg.style.textAlign = 'center';
      emptyMsg.style.padding = '20px';
      emptyMsg.innerText = 'No cases found matching your criteria.';
      selectorContainer.appendChild(emptyMsg);
    } else {
      scenarios.forEach((scenario) => {
        const btn = document.createElement('button');
        btn.className = 'case-option-btn';
        btn.style.textAlign = 'left';
        btn.style.padding = '12px 16px';
        btn.style.display = 'flex';
        btn.style.flexDirection = 'column';
        btn.style.gap = '4px';
        
        const topic = this.topicsDb[scenario.topicKey];
        let scenarioIdx = 0;
        if (topic && topic.caseSimulation && topic.caseSimulation.scenarios) {
          scenarioIdx = topic.caseSimulation.scenarios.findIndex(s => s.id === scenario.id || s.title === scenario.title);
          if (scenarioIdx === -1) scenarioIdx = 0;
        }

        btn.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <span style="font-weight: 700; color: var(--primary); font-size: 0.85rem;">${scenario.title}</span>
            <span style="font-size: 0.65rem; font-weight: 700; padding: 2px 6px; border-radius: 8px; background: rgba(99, 102, 241, 0.1); color: var(--primary);">${scenario.difficulty}</span>
          </div>
          <span style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.3; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${scenario.intro}</span>
          <div style="display: flex; gap: 8px; font-size: 0.65rem; color: var(--text-muted); margin-top: 4px; font-weight: 600;">
            <span>${scenario.specialty}</span>
            <span>•</span>
            <span>Topic: ${scenario.topicKey}</span>
          </div>
        `;
        
        btn.onclick = () => {
          this.currentTopic = scenario.topicKey;
          this.startScenario(topic.caseSimulation, scenarioIdx);
        };
        selectorContainer.appendChild(btn);
      });
    }

    optionsBox.appendChild(selectorContainer);
  }

  showScenarioSelector(caseSim) {
    this.filterScenarios();
  }

  startScenario(caseSim, idx) {
    this.caseStepIdx = 0;
    this.currentScenarioIdx = idx;
    
    const chatBox = document.getElementById('case-chat-box');
    if (!chatBox) return;

    let scenario = null;
    if (caseSim.scenarios) {
      scenario = caseSim.scenarios[idx];
    } else {
      scenario = caseSim;
    }

    chatBox.innerHTML = `
      <div class="case-bubble system" style="align-self: flex-start; width: 100%;">
        <strong>Clinical Case Started: ${scenario.title}</strong>
      </div>
      <div class="case-bubble system" style="align-self: flex-start; width: 100%;">
        <strong>Initial Presentation:</strong><br>${scenario.intro}
      </div>
    `;

    this.updatePatientChart();
    this.showCaseStep();
  }

  updatePatientChart() {
    const topic = this.topicsDb[this.currentTopic];
    if (!topic) return;
    const caseSim = topic.caseSimulation;
    
    let scenario = null;
    if (caseSim.scenarios) {
      scenario = caseSim.scenarios[this.currentScenarioIdx];
    } else {
      scenario = caseSim;
    }
    
    const patient = scenario.patient || {
      id: `C-${this.currentTopic.substring(0,3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
      demographics: scenario.demographics || '52-year-old Patient',
      duration: scenario.duration || '2 weeks',
      complaint: scenario.complaint || topic.title || 'General symptoms',
      vitals: scenario.vitals || 'BP: 120/80 mmHg | HR: 72 bpm | RR: 16/min | Temp: 37.0°C | SpO2: 98%'
    };
    
    const differentials = scenario.differentials || {
      chips: scenario.diffChips || [topic.title, 'Alternative Diagnosis', 'Symptomatic Assessment'],
      reasoning: scenario.diffReasoning || `Patient presenting with signs of ${topic.title}. Must assess key biomarkers and clinical parameters.`
    };
    
    const investigations = scenario.investigations || {
      labs: scenario.labs || 'Routine blood work, BMP',
      imaging: scenario.imaging || 'Chest X-ray',
      findings: scenario.findings || 'Standard imaging and laboratory analysis pending evaluation.'
    };
    
    const management = scenario.management || {
      options: scenario.manageOptions || 'Lifestyle changes and outpatient medication.',
      pearl: scenario.managePearl || topic.pearl || 'Monitor patient response carefully.'
    };
    
    const aiInsights = scenario.aiInsights || {
      explanation: scenario.aiExplanation || topic.overview || 'AI insights into pathogenesis and clinical guidelines.',
      modules: scenario.aiModules || [
        { id: 'rec-1', name: `Pathophysiology of ${topic.title}`, panel: 'topic-learning' }
      ]
    };

    // Fallbacks for Clinical Findings
    let symptomsVal = scenario.symptoms;
    let examVal = scenario.exam;
    let historyVal = scenario.history;
    
    if (!symptomsVal || !examVal || !historyVal) {
      if (this.currentTopic === 'Myocardial Infarction') {
        if (this.currentScenarioIdx === 0) { // STEMI
          symptomsVal = 'Crushing substernal chest pain radiating to left arm, sweating (diaphoresis), mild nausea.';
          examVal = 'Diaphoretic, anxious, heart sounds normal (no S3/S4), clear lung fields, symmetric pulses.';
          historyVal = 'Hypertension, hyperlipidemia, family history of premature coronary artery disease.';
        } else { // Silent MI
          symptomsVal = 'Severe unexplained dyspnea, progressive fatigue, mild epigastric discomfort, no chest pain.';
          examVal = 'Mild respiratory distress, bibasilar crackles, cool extremities, clear S1/S2.';
          historyVal = 'Long-standing type 2 diabetes mellitus, chronic kidney disease stage 3, hypertension.';
        }
      } else if (this.currentTopic === 'Diabetes Mellitus') {
        if (this.currentScenarioIdx === 0) { // Newly Diagnosed
          symptomsVal = 'Polyuria, polydipsia, and mild fatigue.';
          examVal = 'Obese (BMI 32.5), thyroid normal, no dry mucous membranes, peripheral pulses intact.';
          historyVal = 'Sedentary lifestyle, diet high in refined carbohydrates, family history of T2DM.';
        } else if (this.currentScenarioIdx === 1) { // DKA
          symptomsVal = 'Abdominal pain, vomiting, rapid deep breathing (Kussmaul).';
          examVal = 'Tachypneic (Kussmaul breathing), dry mucous membranes, poor skin turgor, tachycardic.';
          historyVal = 'Type 1 Diabetes Mellitus diagnosed at age 14, non-compliance with insulin regimen.';
        } else { // Long-Term
          symptomsVal = 'Polyuria, nocturia, dry mouth, blurred vision.';
          examVal = 'Obese, reduced sensation to monofilament testing bilaterally on plantar surfaces.';
          historyVal = '10-year history of Type 2 Diabetes, coronary artery disease post-PCI, hypertension.';
        }
      } else {
        symptomsVal = patient.complaint || 'Atypical presentation with distress.';
        examVal = 'Mild distress, vital signs stable, chest clear to auscultation.';
        historyVal = 'No significant prior medical history reported.';
      }
    }

    // Fallback for Probability
    let probabilityVal = differentials.probability;
    if (!probabilityVal) {
      if (this.currentTopic === 'Myocardial Infarction') {
        if (this.currentScenarioIdx === 0) {
          probabilityVal = 'Acute STEMI: 85% | Aortic Dissection: 5% | Pericarditis: 5% | GERD: 5%';
        } else {
          probabilityVal = 'Silent MI: 70% | Atypical Angina: 15% | GERD: 10% | Pulmonary Embolism: 5%';
        }
      } else if (this.currentTopic === 'Diabetes Mellitus') {
        if (this.currentScenarioIdx === 0) {
          probabilityVal = 'Type 2 Diabetes Mellitus: 90% | LADA: 5% | Prediabetes: 5%';
        } else if (this.currentScenarioIdx === 1) {
          probabilityVal = 'Diabetic Ketoacidosis (DKA): 95% | HHS: 3% | Lactic Acidosis: 2%';
        } else {
          probabilityVal = 'Poorly Controlled T2DM: 80% | Diabetic Nephropathy: 15% | Neuropathy: 5%';
        }
      } else {
        const chips = differentials.chips || [];
        if (chips.length > 0) {
          probabilityVal = chips.map((c, idx) => `${c}: ${idx === 0 ? '75%' : idx === 1 ? '15%' : '10%'}`).join(' | ');
        } else {
          probabilityVal = 'Active Diagnosis: 80% | Alternative: 20%';
        }
      }
    }

    document.getElementById('case-patient-id').innerText = `Case ID: ${patient.id}`;
    document.getElementById('case-patient-demographics').innerText = patient.demographics;
    document.getElementById('case-patient-duration').innerText = patient.duration;
    document.getElementById('case-patient-complaint').innerText = patient.complaint;
    document.getElementById('case-patient-vitals').innerText = patient.vitals;

    // Clinical Findings
    document.getElementById('case-findings-symptoms').innerText = symptomsVal;
    document.getElementById('case-findings-exam').innerText = examVal;
    document.getElementById('case-findings-history').innerText = historyVal;

    const diffChipsContainer = document.getElementById('case-diff-chips');
    diffChipsContainer.innerHTML = '';
    differentials.chips.forEach(chip => {
      const span = document.createElement('span');
      span.className = 'badge-blue';
      span.style.fontSize = '0.65rem';
      span.style.padding = '2px 8px';
      span.style.borderRadius = '12px';
      span.style.background = 'var(--primary-glow)';
      span.style.color = 'var(--primary)';
      span.innerText = chip;
      diffChipsContainer.appendChild(span);
    });
    document.getElementById('case-diff-probability').innerText = probabilityVal;
    document.getElementById('case-diff-reasoning').innerText = differentials.reasoning;

    document.getElementById('case-invest-labs').innerText = investigations.labs;
    document.getElementById('case-invest-imaging').innerText = investigations.imaging;
    document.getElementById('case-invest-findings').innerText = investigations.findings;

    document.getElementById('case-manage-options').innerText = management.options;
    document.getElementById('case-manage-pearl').innerText = management.pearl;

    document.getElementById('case-insights-explanation').innerHTML = aiInsights.explanation;
    const recModulesContainer = document.getElementById('case-insights-modules');
    recModulesContainer.innerHTML = '';
    aiInsights.modules.forEach(mod => {
      const btn = document.createElement('button');
      btn.className = 'badge-chip';
      btn.style.fontSize = '0.65rem';
      btn.style.padding = '4px 8px';
      btn.innerText = mod.name;
      btn.onclick = () => this.switchPanel('topic-learning');
      recModulesContainer.appendChild(btn);
    });

    this.updateCardLockStates();
  }

  updateCardLockStates() {
    const cardDiff = document.getElementById('case-card-differentials');
    const cardInvest = document.getElementById('case-card-investigations');
    const cardManage = document.getElementById('case-card-management');
    const cardInsights = document.getElementById('case-card-insights');

    if (!cardDiff || !cardInvest || !cardManage || !cardInsights) return;

    cardDiff.classList.remove('locked');
    cardInvest.classList.remove('locked');
    cardManage.classList.remove('locked');
    cardInsights.classList.remove('locked');
  }

  showCaseStep() {
    const topic = this.topicsDb[this.currentTopic];
    if (!topic) return;
    const caseSim = topic.caseSimulation;
    
    const chatBox = document.getElementById('case-chat-box');
    if (!chatBox) return;

    let steps = [];
    if (caseSim.scenarios) {
      steps = caseSim.scenarios[this.currentScenarioIdx].steps;
    } else {
      steps = caseSim.steps;
    }

    this.updateCardLockStates();

    if (this.caseStepIdx >= steps.length) {
      chatBox.innerHTML += `
        <div class="case-bubble system" style="background: rgba(16,185,129,0.1); border-color: var(--success); align-self: flex-start; width: 100%;">
          🎉 <strong>Scenario Completed successfully!</strong><br>You solved the clinical challenge and earned +20 XP.
        </div>
      `;

      this.casesSolved += 1;
      this.userXP += 20;
      this.updateXPStats();

      const optionsBox = document.getElementById('case-options-box');
      if (optionsBox) {
        optionsBox.innerHTML = '';
        if (caseSim.scenarios && this.currentScenarioIdx < caseSim.scenarios.length - 1) {
          const nextScenBtn = document.createElement('button');
          nextScenBtn.className = 'btn-primary';
          nextScenBtn.style.width = '100%';
          nextScenBtn.style.padding = '12px';
          nextScenBtn.style.borderRadius = '12px';
          nextScenBtn.style.marginTop = '8px';
          nextScenBtn.innerText = 'Next Scenario →';
          nextScenBtn.onclick = () => this.startScenario(caseSim, this.currentScenarioIdx + 1);
          optionsBox.appendChild(nextScenBtn);

          const backBtn = document.createElement('button');
          backBtn.className = 'btn-outline';
          backBtn.style.width = '100%';
          backBtn.style.padding = '10px';
          backBtn.style.borderRadius = '12px';
          backBtn.style.marginTop = '8px';
          backBtn.innerText = 'Back to Scenario List';
          backBtn.onclick = () => this.initCaseDiscussion(caseSim);
          optionsBox.appendChild(backBtn);
        } else {
          const returnBtn = document.createElement('button');
          returnBtn.className = 'btn-primary';
          returnBtn.style.width = '100%';
          returnBtn.style.padding = '12px';
          returnBtn.style.borderRadius = '12px';
          returnBtn.innerText = 'Return to Dashboard';
          returnBtn.onclick = () => this.switchPanel('dashboard');
          optionsBox.appendChild(returnBtn);

          if (caseSim.scenarios) {
            const backBtn = document.createElement('button');
            backBtn.className = 'btn-outline';
            backBtn.style.width = '100%';
            backBtn.style.padding = '10px';
            backBtn.style.borderRadius = '12px';
            backBtn.style.marginTop = '8px';
            backBtn.innerText = 'Back to Scenario List';
            backBtn.onclick = () => this.initCaseDiscussion(caseSim);
            optionsBox.appendChild(backBtn);
          }
        }
      }
      return;
    }

    const currentStep = steps[this.caseStepIdx];
    
    chatBox.innerHTML += `
      <div class="case-bubble system" style="align-self: flex-start; width: 100%;">
        <strong>Clinical Prompt:</strong><br>${currentStep.doctor}
      </div>
    `;
    
    chatBox.scrollTop = chatBox.scrollHeight;

    const optionsBox = document.getElementById('case-options-box');
    if (optionsBox) {
      optionsBox.innerHTML = '';
      currentStep.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'case-option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => this.handleCaseAnswer(opt, idx);
        optionsBox.appendChild(btn);
      });
    }
  }

  handleCaseAnswer(optionObj, optionIdx) {
    const chatBox = document.getElementById('case-chat-box');
    if (!chatBox) return;
    
    chatBox.innerHTML += `
      <div class="case-bubble doctor" style="align-self: flex-end; background: var(--primary-glow); border-bottom-right-radius: 4px; border-bottom-left-radius: 12px; margin-top: 8px;">
        Ordered: ${optionObj.text}
      </div>
    `;

    const colorStyle = optionObj.correct ? 'rgba(16,185,129,0.08)' : 'rgba(239, 68, 68, 0.08)';
    const borderColor = optionObj.correct ? 'var(--success)' : '#ef4444';
    const statusLabel = optionObj.correct ? '✓ Correct Evaluation' : '✗ Incorrect Option';
    
    chatBox.innerHTML += `
      <div class="case-bubble system" style="background: ${colorStyle}; border-color: ${borderColor}; align-self: flex-start; margin-top: 8px; border-left: 4px solid ${borderColor}; width: 100%;">
        <strong>${statusLabel}</strong><br>${optionObj.feedback}
      </div>
    `;

    if (optionObj.correct) {
      const topic = this.topicsDb[this.currentTopic];
      if (topic) {
        const caseSim = topic.caseSimulation;
        const steps = caseSim.scenarios ? caseSim.scenarios[this.currentScenarioIdx].steps : caseSim.steps;
        
        if (this.caseStepIdx === 0) {
          const cardDiff = document.getElementById('case-card-differentials');
          if (cardDiff) cardDiff.classList.remove('locked');
        } else if (this.caseStepIdx === 1) {
          const cardInvest = document.getElementById('case-card-investigations');
          if (cardInvest) cardInvest.classList.remove('locked');
        }
        
        if (this.caseStepIdx === steps.length - 1) {
          const cardManage = document.getElementById('case-card-management');
          const cardInsights = document.getElementById('case-card-insights');
          if (cardManage) cardManage.classList.remove('locked');
          if (cardInsights) cardInsights.classList.remove('locked');
        }
      }
    }

    chatBox.scrollTop = chatBox.scrollHeight;

    const optionsBox = document.getElementById('case-options-box');
    if (optionsBox) {
      optionsBox.innerHTML = '';
      
      if (optionObj.correct) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-primary';
        nextBtn.style.width = '100%';
        nextBtn.style.padding = '12px';
        nextBtn.style.borderRadius = '12px';
        nextBtn.style.marginTop = '8px';
        nextBtn.innerText = 'Next Step →';
        nextBtn.onclick = () => this.progressCaseStep();
        optionsBox.appendChild(nextBtn);
      } else {
        const btnContainer = document.createElement('div');
        btnContainer.style.display = 'flex';
        btnContainer.style.gap = '10px';
        btnContainer.style.width = '100%';
        btnContainer.style.marginTop = '8px';

        const retryBtn = document.createElement('button');
        retryBtn.className = 'btn-outline';
        retryBtn.style.flex = '1';
        retryBtn.style.padding = '12px';
        retryBtn.style.borderRadius = '12px';
        retryBtn.innerText = '↺ Retry Question';
        retryBtn.onclick = () => this.retryCaseStep();

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-primary';
        nextBtn.style.flex = '1';
        nextBtn.style.padding = '12px';
        nextBtn.style.borderRadius = '12px';
        nextBtn.innerText = 'Next Step →';
        nextBtn.onclick = () => this.progressCaseStep();

        btnContainer.appendChild(retryBtn);
        btnContainer.appendChild(nextBtn);
        optionsBox.appendChild(btnContainer);
      }
    }
  }

  progressCaseStep() {
    this.caseStepIdx += 1;
    this.showCaseStep();
  }

  retryCaseStep() {
    const topic = this.topicsDb[this.currentTopic];
    if (!topic || !topic.caseSimulation) return;
    const caseSim = topic.caseSimulation;
    let steps = [];
    if (caseSim.scenarios) {
      steps = caseSim.scenarios[this.currentScenarioIdx].steps;
    } else {
      steps = caseSim.steps;
    }
    const currentStep = steps[this.caseStepIdx];
    const optionsBox = document.getElementById('case-options-box');
    if (optionsBox) {
      optionsBox.innerHTML = '';
      currentStep.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'case-option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => this.handleCaseAnswer(opt, idx);
        optionsBox.appendChild(btn);
      });
    }
  }

  // 3D Flashcards controls
  showFlashcard(fcList) {
    if (!fcList || fcList.length === 0) return;
    const currentCard = fcList[this.fcIdx];
    
    const fcQ = document.getElementById('fc-question');
    if (fcQ) fcQ.innerText = currentCard.q;
    
    const fcA = document.getElementById('fc-answer');
    if (fcA) fcA.innerText = currentCard.a;
    
    const fcTF = document.getElementById('fc-type-front');
    if (fcTF) fcTF.innerText = `${this.currentSubject} Challenge`;
    
    const fcTB = document.getElementById('fc-type-back');
    if (fcTB) fcTB.innerText = 'Clinical Answer Core';

    const fcProg = document.getElementById('fc-progress-num');
    if (fcProg) fcProg.innerText = `${this.fcIdx + 1} of ${fcList.length}`;
    
    // Update mini-widget in Topic Learning
    const widgetType = document.getElementById('fc-type-label');
    if (widgetType) widgetType.innerText = `${this.currentSubject} Challenge`;
    
    const widgetFront = document.getElementById('fc-front-text');
    if (widgetFront) widgetFront.innerText = currentCard.q;
    
    const widgetBack = document.getElementById('fc-back-text');
    if (widgetBack) widgetBack.innerText = currentCard.a;
    
    const widgetCount = document.getElementById('fc-count-indicator');
    if (widgetCount) widgetCount.innerText = `${this.fcIdx + 1} of ${fcList.length}`;
    
    const deckCard = document.getElementById('main-flashcard');
    if (deckCard) {
      deckCard.classList.remove('flipped');
    }

    const widgetCard = document.querySelector('.flashcard-widget');
    if (widgetCard) {
      widgetCard.classList.remove('flipped');
    }
  }

  flipFlashcard() {
    const deckCard = document.getElementById('main-flashcard');
    if (deckCard) {
      deckCard.classList.toggle('flipped');
    }

    const widgetCard = document.querySelector('.flashcard-widget');
    if (widgetCard) {
      widgetCard.classList.toggle('flipped');
    }
  }

  cycleFlashcard(direction) {
    const topic = this.topicsDb[this.currentTopic];
    if (!topic || !topic.flashcards) return;
    const list = topic.flashcards;
    this.fcIdx += direction;
    
    if (this.fcIdx < 0) this.fcIdx = list.length - 1;
    if (this.fcIdx >= list.length) this.fcIdx = 0;

    this.showFlashcard(list);
  }

  nextFlashcard(event) {
    if (event) event.stopPropagation();
    this.cycleFlashcard(1);
  }

  // Simulated Atlas Medical Search
  handleSearchSubmit(query) {
    if (!this.atlasIdle) return;
    this.atlasIdle = false;

    // Sidebar status
    const atlasPulseDot = document.querySelector('.sidebar-atlas-pulse');
    const atlasStatusText = document.querySelector('.sidebar-atlas-status strong');
    if (atlasPulseDot) atlasPulseDot.style.backgroundColor = 'var(--accent)';
    if (atlasStatusText) atlasStatusText.innerText = 'Analyzing...';

    // Workspace logs
    const loadingCard = document.getElementById('atlas-loading-card');
    const loadingBar = document.getElementById('atlas-processing-bar');
    const loadingStatusText = document.getElementById('atlas-status-text');
    const loadingStepNum = document.getElementById('atlas-step-num');
    const consoleLog = document.getElementById('atlas-console-log');

    // Switch to AI assistant screen to view processing steps
    this.switchPanel('ai-workspace');

    if (loadingCard) loadingCard.style.display = 'flex';
    if (loadingBar) loadingBar.style.width = '10%';
    if (loadingStatusText) loadingStatusText.innerText = 'Connecting to Atlas Medical databases...';
    if (loadingStepNum) loadingStepNum.innerText = 'Step 1 of 4';
    if (consoleLog) consoleLog.innerHTML = `&gt; Initiating medical vector queries for: "${query}"...<br>&gt; Connected. Searching clinical registries...`;

    setTimeout(() => {
      if (loadingBar) loadingBar.style.width = '40%';
      if (loadingStatusText) loadingStatusText.innerText = 'Synthesizing pathophysiology & histology layers...';
      if (loadingStepNum) loadingStepNum.innerText = 'Step 2 of 4';
      if (consoleLog) consoleLog.innerHTML += `<br>&gt; Parsing pathophysiology parameters. Staging differential diagnoses...<br>&gt; Structuring anatomical layer outlines...`;
    }, 1000);

    setTimeout(() => {
      if (loadingBar) loadingBar.style.width = '70%';
      if (loadingStatusText) loadingStatusText.innerText = 'Generating case studies & board MCQs...';
      if (loadingStepNum) loadingStepNum.innerText = 'Step 3 of 4';
      if (consoleLog) consoleLog.innerHTML += `<br>&gt; Constructing clinical case loops.<br>&gt; Formatting interactive SVG hotspots.`;
    }, 2000);

    setTimeout(() => {
      if (loadingBar) loadingBar.style.width = '95%';
      if (loadingStatusText) loadingStatusText.innerText = 'Compiling oral examination keys...';
      if (loadingStepNum) loadingStepNum.innerText = 'Step 4 of 4';
      if (consoleLog) consoleLog.innerHTML += `<br>&gt; Finalizing high-yield summary sheets.<br>&gt; Checkpoints and Viva questions verified by Atlas.`;
    }, 3000);

    setTimeout(() => {
      if (loadingBar) loadingBar.style.width = '100%';
      if (loadingCard) loadingCard.style.display = 'none';

      if (atlasPulseDot) atlasPulseDot.style.backgroundColor = 'var(--success)';
      if (atlasStatusText) atlasStatusText.innerText = 'Active';
      this.atlasIdle = true;

      // Extract matching topics
      const cleanQ = query.toLowerCase();
      const matchedTopics = [];

      Object.keys(this.topicsDb).forEach(t => {
        if (cleanQ.includes(t.toLowerCase()) || t.toLowerCase().includes(cleanQ)) {
          matchedTopics.push(t);
        }
      });

      if (matchedTopics.length === 0) {
        // Generate new dynamic topic
        const formattedTitle = query.replace(/\b\w/g, c => c.toUpperCase());
        this.topicsDb[formattedTitle] = this.generateDynamicMedicalTopic(formattedTitle, 'General Medicine');
        if (!this.subjectTopicsDb['General Medicine']) this.subjectTopicsDb['General Medicine'] = [];
        if (!this.subjectTopicsDb['General Medicine'].includes(formattedTitle)) {
          this.subjectTopicsDb['General Medicine'].push(formattedTitle);
        }
        matchedTopics.push(formattedTitle);
      }

      if (matchedTopics.length === 1) {
        const others = Object.keys(this.topicsDb).filter(t => t !== matchedTopics[0]);
        if (others.length > 0) matchedTopics.push(others[0]);
        if (others.length > 1) matchedTopics.push(others[1]);
      }

      // Switch to Global Search Panel
      this.switchPanel('global-search');
      document.getElementById('search-query-subtitle').innerText = `Results for "${query}"`;

      const resultsList = document.getElementById('search-results-list');
      resultsList.innerHTML = '';
      
      matchedTopics.forEach(tName => {
        const topic = this.topicsDb[tName];
        let icon = '🩺';
        if (tName.includes('Infarction') || tName.includes('Heart')) icon = '🫀';
        else if (tName.includes('Stroke')) icon = '🧠';
        else if (tName.includes('Blockers')) icon = '💊';
        else if (tName.includes('Appendicitis')) icon = '🩹';

        const item = document.createElement('div');
        item.className = 'recent-lesson-item';
        item.style.cursor = 'pointer';
        item.onclick = () => {
          this.loadTopic(tName, true);
        };
        item.innerHTML = `
          <div class="lesson-item-left">
            <div class="lesson-item-icon" style="font-size: 1.25rem;">${icon}</div>
            <div>
              <div class="lesson-item-title" style="font-weight: 600; color: var(--text-primary);">${tName}</div>
              <div class="lesson-item-desc" style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 4px;">Subject: ${topic.subject} — High-yield clinical outline.</div>
            </div>
          </div>
          <span style="color: var(--primary); font-size: 0.85rem; font-weight: 600;">View Course →</span>
        `;
        resultsList.appendChild(item);
      });

      this.activityLogs.unshift({
        type: '🔎',
        title: `Searched for "${query}"`,
        time: 'Just now',
        desc: `Atlas retrieved ${matchedTopics.length} courses matching the query.`
      });
      this.renderActivityLogs();

    }, 3800);
  }

  triggerSearch(queryText) {
    const input = document.getElementById('workspace-search-input');
    if (input) input.value = queryText;
    this.handleSearchSubmit(queryText);
  }

  // Dynamic Generator for unlisted medical topics (pathologies)
  generateDynamicMedicalTopic(topicName, subjectCategory = 'General Medicine') {
    return {
      title: topicName,
      subject: subjectCategory,
      overview: `<p><strong>${topicName}</strong> represents an important clinical entity within <strong>${subjectCategory}</strong>. Pathogenesis typically involves structural cells or tissue alterations leading to functional decays.</p>
      <p>Diagnostic protocols rely on presenting symptomatologies, serum laboratory tests, and targeted medical imaging. Treatment incorporates pharmacological interventions combined with lifestyle mitigations to restore baseline homeostasis.</p>`,
      pearl: `For ${topicName}, early diagnosis is key to prevent chronic cellular damage. Always review baseline contraindications before introducing pharmacotherapy.`,
      takeaways: [
        `Etiology centers on cellular dysfunction in target structures.`,
        `Primary symptoms include localized pain, elevated biological markers, and systemic fatigue.`,
        `Standard therapies combine active pharmaceutical drugs and monitoring.`,
        `Chronic untreated stages lead to fibrotic organ scannings and failure.`
      ],
      mnemonic: {
        phrase: 'DIAGNOSE Diffs',
        explain: `Mnemonic for ${topicName}: Differentiate, Inspect, Assess, G-protein checks, Note symptoms, Observe baseline, Start therapy, Evaluate progress.`
      },
      accordions: [
        {
          title: `Overview of ${topicName}`,
          content: `<p>General pathophysiology details and standard guidelines for ${topicName}. Check functions early.</p>`
        }
      ],
      caseSimulation: {
        intro: `A 45-year-old female presents with subacute onset of symptoms suggestive of ${topicName}. Vital signs are stable, but physical examination reveals mild local tenderness.`,
        steps: [
          {
            doctor: `Welcome Doctor. How do you plan to proceed with diagnosing ${topicName}?`,
            options: [
              { text: 'Perform targeted imaging and request serum pathology panels', correct: true, feedback: 'Correct! Confirms tissue markers and rules out overlapping diffs.' },
              { text: 'Prescribe high-dose empirical therapy without checking labs', correct: false, feedback: 'Incorrect. Unverified drugs can induce toxicity if functions are impaired.' }
            ]
          },
          {
            doctor: 'Results return positive for primary markers. Confirming diagnosis. What is your initial treatment path?',
            options: [
              { text: 'Initiate first-line guideline-directed pharmacotherapy and schedule follow-up', correct: true, feedback: 'Correct! Standard guidelines provide verified recovery profiles.' },
              { text: 'Recommend surgery immediately as primary option', correct: false, feedback: 'Incorrect. Surgery is reserved for severe refractory cases.' }
            ]
          }
        ]
      },
      diagramLayers: ['Inflammatory Cell Infiltration', 'Vascular Congestion', 'Normal Histology Base'],
      diagramSvg: `<svg class="interactive-diagram-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="layer-normal-histology-base" class="svg-organ-path">
          <circle cx="200" cy="200" r="100" fill="rgba(255,255,255,0.02)" stroke="var(--primary)" stroke-width="2"/>
          <circle cx="200" cy="200" r="30" fill="none" stroke="var(--primary)" stroke-dasharray="3 3"/>
          <text x="200" y="205" fill="var(--text-secondary)" font-size="8" text-anchor="middle">Cell Nucleus</text>
        </g>
        <g id="layer-vascular-congestion" class="svg-organ-path">
          <path d="M100 120 C120 180, 280 180, 300 280" stroke="#ef4444" stroke-width="4" fill="none" opacity="0.6"/>
          <text x="260" y="220" fill="#ef4444" font-size="8">Congested Vessel</text>
        </g>
        <g id="layer-inflammatory-cell-infiltration" class="svg-organ-path">
          <circle cx="150" cy="180" r="4" fill="var(--warning)"/>
          <circle cx="250" cy="180" r="4" fill="var(--warning)"/>
          <circle cx="180" cy="230" r="4" fill="var(--warning)"/>
          <circle cx="220" cy="230" r="4" fill="var(--warning)"/>
          <text x="200" y="250" fill="var(--warning)" font-size="8" text-anchor="middle">Neutrophil Influx</text>
        </g>
        <g class="svg-hotspot" onclick="app.showHotspot('Target Site', 'Site of primary lesion and immune response. Local release of cytokines drives symptoms.')">
          <circle cx="200" cy="170" r="5"/>
          <text x="200" y="160" class="svg-hotspottext" text-anchor="middle">Lesion Core</text>
        </g>
      </svg>`,
      flowchart: [
        { num: 1, title: 'Cellular Triggering Event', desc: 'Infection, toxin, or autoimmune reaction initiates injury.', details: 'The initial stressor disrupts cellular membranes or receptors, triggering intracellular signaling cascades and cytokine release.', q: 'What is the standard cellular response to stress?', opts: ['Atrophy/Hypertrophy', 'Complete cell division', 'Lactate reduction', 'Vagal firing'], ans: 0 },
        { num: 2, title: 'Inflammatory Cascade', desc: 'Vascular permeability increases, cells migrate.', details: 'Leukocytes adhere to vascular endothelium and migrate into interstitial tissues to clear the triggering agent.', q: 'Which vasoactive amine increases permeability first?', opts: ['Histamine', 'Renin', 'Acetylcholine', 'Troponin'], ans: 0 },
        { num: 3, title: 'Clinical Manifestation', desc: 'Symptoms develop, baseline functions decrease.', details: 'Specific cell necrosis markers confirm injury pathways.', q: 'How do we verify tissue injury?', opts: ['Biomarker assay', 'Auscultation alone', 'Blood pressure spike', 'Reflex test'], ans: 0 }
      ],
      knowledgeMap: [
        { id: 'center', label: topicName, x: 250, y: 200, size: 45, color: 'var(--primary)', type: 'core', progress: 50 },
        { id: 'node1', label: 'Etiology Path', x: 230, y: 80, size: 28, color: 'var(--secondary)', type: 'dep', progress: 40 },
        { id: 'node2', label: 'Diagnostics', x: 380, y: 140, size: 28, color: 'var(--accent)', type: 'dep', progress: 60 }
      ],
      flashcards: [
        { q: `What is the key mechanism of cell injury in ${topicName}?`, a: 'Cell membrane damage and metabolic disruption due to targeted cellular stress.' }
      ],
      quiz: [
        {
          q: `Which diagnostic check confirms ${topicName} pathological presence?`,
          opts: ['Imaging & Laboratory Assay', 'Patient subjective report', 'Checking heart rate alone', 'Physical reflex tests'],
          ans: 0,
          explain: 'Specific serum biomarkers confirm cell necrosis or inflammation pathways.'
        }
      ],
      viva: [
        { q: `Describe the pathophysiology of ${topicName}.`, a: 'Pathology initiates at cellular levels, where stressors trigger inflammatory cascades, leading to vascular congestion and tissue necrosis if untreated.' }
      ]
    };
  }

  // Auxiliary loaders
  loadSymptom(symptomName) {
    const data = this.symptomDb[symptomName];
    if (!data) return;

    const chips = ['Chest Pain', 'Dyspnea', 'Acute Headache', 'Acute Abdominal Pain'];
    const ids = ['symptom-chip-chest-pain', 'symptom-chip-dyspnea', 'symptom-chip-headache', 'symptom-chip-abdomen'];
    chips.forEach((c, idx) => {
      const el = document.getElementById(ids[idx]);
      if (el) {
        if (c === symptomName) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      }
    });

    const guidance = document.getElementById('symptom-guidance-text');
    if (guidance) guidance.innerText = data.guidance;

    const nodesWrap = document.getElementById('symptom-nodes-wrap');
    if (nodesWrap) {
      nodesWrap.innerHTML = '';
      data.nodes.forEach(node => {
        const card = document.createElement('div');
        card.className = 'flowchart-node-card';
        card.style.cursor = 'default';
        card.innerHTML = `
          <div class="node-number" style="background: var(--accent); color: #fff;">${node.num}</div>
          <div class="node-info">
            <div class="node-title" style="color: var(--text-primary); font-weight: 600;">${node.title}</div>
            <div class="node-desc" style="color: var(--text-secondary); margin-top: 4px; font-size: 0.85rem;">${node.desc}</div>
          </div>
        `;
        nodesWrap.appendChild(card);
      });
    }

    const diffsBox = document.getElementById('symptom-diffs-box');
    if (diffsBox) {
      diffsBox.innerHTML = '';
      data.diffs.forEach(diff => {
        const item = document.createElement('div');
        item.innerHTML = `
          <div class="progress-text-row" style="margin-bottom: 4px;">
            <span>${diff.name}</span>
            <strong>${diff.percent}%</strong>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${diff.percent}%; background: var(--accent);"></div>
          </div>
        `;
        diffsBox.appendChild(item);
      });
    }
  }

  // Saved Library bookmarks filters
  filterLibrary(type, btnElement) {
    const tabs = document.querySelectorAll('.library-tabs .library-tab');
    tabs.forEach(t => t.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    this.renderLibrary(type);
  }

  renderLibrary(filterType = 'all') {
    const grid = document.getElementById('library-grid-box');
    if (!grid) return;
    grid.innerHTML = '';

    const list = this.bookmarkedTopics;
    let renderedCount = 0;

    list.forEach(tName => {
      const topic = this.topicsDb[tName];
      if (!topic) return;

      let cardType = 'notes';
      if (tName.includes('Card') || tName.includes('Appendicitis')) cardType = 'maps';

      if (filterType !== 'all' && filterType !== cardType) return;
      renderedCount++;

      const card = document.createElement('div');
      card.className = 'glass-card library-card';
      card.innerHTML = `
        <span class="library-card-tag ${cardType}">${cardType}</span>
        <div class="library-card-icon">🫀</div>
        <div class="library-card-title">${topic.title}</div>
        <div class="library-card-date">Subject: ${topic.subject}</div>
      `;

      card.onclick = () => {
        this.loadTopic(topic.title, true);
      };

      grid.appendChild(card);
    });

    const countText = document.getElementById('library-count-text');
    if (countText) countText.innerText = `Showing ${renderedCount} bookmarked assets`;
  }

  renderProfile() {
    // Populate bookmarks
    const bkmList = document.getElementById('profile-bookmarks-list');
    if (bkmList) {
      bkmList.innerHTML = '';
      if (this.bookmarkedTopics.length === 0) {
        bkmList.innerHTML = '<div style="font-size: 0.85rem; color: var(--text-secondary); padding: 8px 0;">No bookmarked topics yet.</div>';
      } else {
        this.bookmarkedTopics.forEach(t => {
          const div = document.createElement('div');
          div.className = 'recent-lesson-item';
          div.style.cursor = 'pointer';
          div.onclick = () => this.loadTopic(t, true);
          div.innerHTML = `
            <div class="lesson-item-left">
              <div class="lesson-item-icon">🔖</div>
              <div>
                <div class="lesson-item-title" style="font-weight:600; color:var(--text-primary);">${t}</div>
                <div class="lesson-item-desc" style="color:var(--text-secondary); font-size:0.75rem;">Topic Revision Outline</div>
              </div>
            </div>
            <span style="color:var(--primary); font-size:0.8rem; font-weight:600;">Open →</span>
          `;
          bkmList.appendChild(div);
        });
      }
    }

    // Populate history
    const histList = document.getElementById('profile-history-list');
    if (histList) {
      histList.innerHTML = '';
      this.activityLogs.forEach(log => {
        const div = document.createElement('div');
        div.className = 'recent-lesson-item';
        div.innerHTML = `
          <div class="lesson-item-left">
            <div class="lesson-item-icon" style="font-size:1.1rem;">${log.type}</div>
            <div>
              <div class="lesson-item-title" style="font-weight:600; color:var(--text-primary);">${log.title}</div>
              <div class="lesson-item-desc" style="color:var(--text-secondary); font-size:0.8rem;">${log.desc}</div>
            </div>
          </div>
          <span style="font-size:0.75rem; color:var(--text-muted);">${log.time}</span>
        `;
        histList.appendChild(div);
      });
    }
  }

  // Settings profiles config
  changeStudyTrack(trackName) {
    this.userStudyTrack = trackName;
    const statsLabel = document.getElementById('stats-target-label');
    if (statsLabel) statsLabel.innerText = `${trackName} Tracker`;
    
    this.activityLogs.unshift({
      type: '⚙️',
      title: 'Switched Studying Syllabus',
      time: 'Just now',
      desc: `Configured core goal tracker targeting ${trackName}.`
    });
    this.renderActivityLogs();
  }

  resetAllProgress() {
    if (confirm('Are you sure you want to clear your study progress and bookmarks history?')) {
      this.bookmarkedTopics = ['Myocardial Infarction'];
      this.userXP = 100;
      this.userStreak = 1;
      this.quizzesCompleted = 0;
      this.casesSolved = 0;
      this.hoursStudied = '0h';

      this.updateXPStats();
      this.renderLibrary();
      this.switchPanel('dashboard');
      alert('All progress cleared.');
    }
  }

  // Update stats counters
  updateXPStats() {
    const dStreak = document.getElementById('dash-streak');
    if (dStreak) dStreak.innerText = `${this.userStreak} Days`;

    const dXPTotal = document.getElementById('dash-xp-total');
    if (dXPTotal) dXPTotal.innerText = `${this.userXP} XP`;
    
    const xpPercent = Math.min(Math.round((this.userXP / this.userTargetGoal) * 100), 100);
    const dXPProg = document.getElementById('dash-xp-progress');
    if (dXPProg) dXPProg.innerText = `${xpPercent}% (${this.userXP}/${this.userTargetGoal})`;
    
    const statsQuizzes = document.getElementById('stats-quizzes');
    if (statsQuizzes) statsQuizzes.innerText = this.quizzesCompleted;

    const statsCases = document.getElementById('stats-cases');
    if (statsCases) statsCases.innerText = this.casesSolved;

    const statsCasesSolved = document.getElementById('stats-cases-solved');
    if (statsCasesSolved) statsCasesSolved.innerText = this.casesSolved;

    const statsHours = document.getElementById('stats-hours');
    if (statsHours) statsHours.innerText = this.hoursStudied;

    const statsTargetXP = document.getElementById('stats-target-xp');
    if (statsTargetXP) statsTargetXP.innerText = `${this.userXP} / ${this.userTargetGoal} XP`;

    const statsTargetBar = document.getElementById('stats-target-bar');
    if (statsTargetBar) statsTargetBar.style.width = `${xpPercent}%`;
  }

  renderActivityLogs() {
    const list = document.getElementById('activity-timeline-box');
    if (!list) return;
    list.innerHTML = '';

    this.activityLogs.forEach(log => {
      const ev = document.createElement('div');
      ev.className = 'timeline-event';
      ev.innerHTML = `
        <div class="timeline-dot" style="width:32px; height:32px; border-radius:50%; font-size:1rem; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.05);">${log.type}</div>
        <div class="timeline-event-content" style="flex:1;">
          <div class="timeline-event-header">
            <span class="timeline-event-title">${log.title}</span>
            <span class="timeline-event-time">${log.time}</span>
          </div>
          <p class="timeline-event-desc">${log.desc}</p>
        </div>
      `;
      list.appendChild(ev);
    });
  }

  // Concept comparison selector mapping
  setupComparisonOptions() {
    const sel1 = document.getElementById('compare-select-1');
    const sel2 = document.getElementById('compare-select-2');
    if (!sel1 || !sel2) return;

    sel1.innerHTML = `
      <option value="ai_vs_ml">STEMI vs NSTEMI Infarction</option>
      <option value="sql_vs_nosql">Pre-clinical vs Clinical Phases</option>
      <option value="tcp_vs_udp">Cardioselective vs Non-Selective Beta Blockers</option>
      <option value="mitosis_vs_meiosis">Ischemic vs Hemorrhagic Stroke</option>
    `;
    sel2.innerHTML = sel1.innerHTML;
    sel2.selectedIndex = 2;

    this.runComparison();
  }

  runComparison() {
    const selVal1 = document.getElementById('compare-select-1').value;
    const data = this.comparisonDb[selVal1];
    if (!data) return;

    const ch1 = document.getElementById('compare-header-1');
    if (ch1) ch1.innerText = data.conceptA;

    const ch2 = document.getElementById('compare-header-2');
    if (ch2) ch2.innerText = data.conceptB;

    const tbody = document.getElementById('compare-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    data.features.forEach(feat => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="comparison-feature-col">${feat.name}</td>
        <td>
          <span class="comparison-val-tag primary">${data.conceptA.split(' ')[0]}</span>
          <p>${feat.valA}</p>
        </td>
        <td>
          <span class="comparison-val-tag secondary">${data.conceptB.split(' ')[0]}</span>
          <p>${feat.valB}</p>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Canvas map setup (supports duplicate canvases gracefully)
  setupMapNodes(nodeArray) {
    this.canvasNodes = nodeArray.map(node => ({
      ...node,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));
    
    this.canvasLinks = [];
    const centerNode = this.canvasNodes.find(n => n.type === 'core');
    if (centerNode) {
      this.canvasNodes.forEach(node => {
        if (node.id !== centerNode.id) {
          this.canvasLinks.push({
            source: centerNode,
            target: node,
            strength: node.progress > 50 ? 'strong' : 'weak'
          });
        }
      });
    }

    // Update overlay panels across the app
    if (centerNode) {
      this.updateMapOverlays(
        centerNode.label,
        centerNode.progress,
        `Concept map: ${centerNode.label} dependencies.`,
        `Learn ${centerNode.label}`,
        () => {
          if (this.topicsDb[centerNode.label]) {
            this.loadTopic(centerNode.label, true);
          }
        }
      );
    }
  }

  updateMapOverlays(title, progress, desc, learnText, clickHandler) {
    document.querySelectorAll('.k-overlay-title, #k-overlay-title').forEach(el => el.innerText = title);
    document.querySelectorAll('.k-overlay-desc, #k-overlay-desc').forEach(el => el.innerText = desc);
    document.querySelectorAll('#k-overlay-bar').forEach(el => el.style.width = `${progress}%`);
    document.querySelectorAll('#k-overlay-btn').forEach(el => {
      el.innerText = learnText;
      el.onclick = clickHandler;
    });
  }

  initCanvasMap() {
    const canvases = document.querySelectorAll('.knowledge-map-canvas');
    if (canvases.length === 0) return;
    
    this.maps = [];
    canvases.forEach(canvas => {
      const ctx = canvas.getContext('2d');
      this.maps.push({ canvas, ctx });
    });

    this.resizeCanvasMap();
    window.addEventListener('resize', () => this.resizeCanvasMap());

    canvases.forEach(canvas => {
      canvas.addEventListener('mousedown', (e) => this.handleMapMouseDown(e));
      canvas.addEventListener('mousemove', (e) => this.handleMapMouseMove(e));
      canvas.addEventListener('mouseup', () => this.handleMapMouseUp());
    });

    const animate = () => {
      this.updateMapPhysics();
      this.drawMap();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  resizeCanvasMap() {
    if (!this.maps) return;
    this.maps.forEach(({ canvas }) => {
      const container = canvas.parentElement;
      if (canvas && container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    });
  }

  updateMapPhysics() {
    if (!this.maps || this.maps.length === 0 || this.canvasNodes.length === 0) return;

    const canvas = this.maps[0].canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    this.canvasNodes.forEach(node => {
      if (node === this.draggedMapNode) return;

      const dx = centerX - node.x;
      const dy = centerY - node.y;
      node.vx += dx * this.mapGravity * 0.02;
      node.vy += dy * this.mapGravity * 0.02;

      node.x += node.vx;
      node.y += node.vy;

      node.vx *= 0.95;
      node.vy *= 0.95;
    });

    // Collision avoidance
    for (let i = 0; i < this.canvasNodes.length; i++) {
      for (let j = i + 1; j < this.canvasNodes.length; j++) {
        const n1 = this.canvasNodes[i];
        const n2 = this.canvasNodes[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = n1.size + n2.size + 40;

        if (dist < minDist) {
          const overlap = minDist - dist;
          const forceX = (dx / dist) * overlap * 0.08;
          const forceY = (dy / dist) * overlap * 0.08;

          if (n1 !== this.draggedMapNode) {
            n1.vx -= forceX;
            n1.vy -= forceY;
          }
          if (n2 !== this.draggedMapNode) {
            n2.vx += forceX;
            n2.vy += forceY;
          }
        }
      }
    }
  }

  drawMap() {
    if (!this.maps || this.maps.length === 0) return;
    this.maps.forEach(({ canvas, ctx }) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();

      // 1. Draw Links
      this.canvasLinks.forEach(link => {
        ctx.beginPath();
        ctx.moveTo(link.source.x, link.source.y);
        ctx.lineTo(link.target.x, link.target.y);
        if (link.strength === 'strong') {
          ctx.strokeStyle = 'rgba(139, 92, 246, 0.4)';
          ctx.lineWidth = 2;
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
        }
        ctx.stroke();
      });

      // 2. Draw Nodes
      this.canvasNodes.forEach(node => {
        if (node === this.selectedMapNode) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size + 8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(6, 182, 212, 0.15)';
          ctx.fill();
          ctx.strokeStyle = 'var(--accent)';
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (node.progress > 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size - 3, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2 * (node.progress / 100)));
          ctx.strokeStyle = 'var(--success)';
          ctx.lineWidth = 3;
          ctx.stroke();
        }

        ctx.fillStyle = 'var(--text-primary)';
        ctx.font = `600 ${node.size > 30 ? 11 : 9}px 'Plus Jakarta Sans', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, node.x, node.y);
      });

      ctx.restore();
    });
  }

  handleMapMouseDown(e) {
    const pos = this.getCanvasMousePos(e);
    const clickedNode = this.canvasNodes.find(node => {
      const dist = Math.sqrt((node.x - pos.x) ** 2 + (node.y - pos.y) ** 2);
      return dist <= node.size;
    });

    if (clickedNode) {
      this.selectedMapNode = clickedNode;
      this.draggedMapNode = clickedNode;
      
      this.updateMapOverlays(
        clickedNode.label,
        clickedNode.progress,
        `Concept map: ${clickedNode.label}. Mastery progress ${clickedNode.progress}%.`,
        `Learn ${clickedNode.label}`,
        () => {
          if (this.topicsDb[clickedNode.label]) {
            this.loadTopic(clickedNode.label, true);
          } else {
            this.handleSearchSubmit(`Explain ${clickedNode.label}`);
          }
        }
      );
    } else {
      this.selectedMapNode = null;
    }
  }

  handleMapMouseMove(e) {
    if (this.draggedMapNode) {
      const pos = this.getCanvasMousePos(e);
      this.draggedMapNode.x = pos.x;
      this.draggedMapNode.y = pos.y;
    }
  }

  handleMapMouseUp() {
    this.draggedMapNode = null;
  }

  getCanvasMousePos(e) {
    const canvas = e.target;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  resetMapZoom() {
    if (!this.maps || this.maps.length === 0) return;
    const canvas = this.maps[0].canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    this.canvasNodes.forEach((node, idx) => {
      if (node.type === 'core') {
        node.x = centerX;
        node.y = centerY;
      } else {
        const angle = (idx / (this.canvasNodes.length - 1)) * Math.PI * 2;
        node.x = centerX + Math.cos(angle) * 120;
        node.y = centerY + Math.sin(angle) * 120;
      }
      node.vx = 0;
      node.vy = 0;
    });
  }

  changeMapGravity(increase) {
    this.mapGravity = increase 
      ? Math.min(this.mapGravity + 0.02, 0.2)
      : Math.max(this.mapGravity - 0.02, 0.01);
  }

  // 3-layer Roadmap Tree rendering logic
  renderRoadmap(subjectName, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const roadmapData = this.roadmapDb[subjectName];
    if (!roadmapData) {
      container.innerHTML = `<div style="padding:20px; text-align:center; color:var(--text-muted);">No roadmap data available for ${subjectName}</div>`;
      return;
    }

    let html = `
      <div class="roadmap-tree-wrapper" style="padding: 10px; display: flex; flex-direction: column; gap: 16px;">
        <div class="roadmap-layer-1-node" style="background: var(--primary-glow); border: 1.5px solid var(--primary); padding: 12px 18px; border-radius: 16px; text-align: center; font-weight: 800; font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: var(--text-primary); letter-spacing: -0.3px;">
          🗂️ ${roadmapData.title} (Primary Subject)
        </div>
        <div class="roadmap-tree-branches" style="position: relative; padding-left: 20px; border-left: 2px dashed rgba(99, 102, 241, 0.25); margin-left: 15px; display: flex; flex-direction: column; gap: 16px; margin-top: 10px;">
    `;

    roadmapData.subtopics.forEach((subtopic, subIdx) => {
      const isExpanded = this.expandedSubtopics[`${subjectName}-${subIdx}`] !== false;

      html += `
        <div class="roadmap-subtopic-node" style="position: relative;">
          <!-- Node Dot Indicator -->
          <div style="position: absolute; left: -27px; top: 10px; width: 12px; height: 12px; border-radius: 50%; background: ${isExpanded ? 'var(--secondary)' : 'var(--text-muted)'}; border: 2.5px solid var(--bg-primary); z-index: 2;"></div>
          
          <!-- Accordion Header (Layer 2) -->
          <div onclick="app.toggleRoadmapAccordion(event, '${subjectName}', ${subIdx}, '${containerId}')" style="cursor: pointer; display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: var(--bg-secondary); border: 1px solid var(--card-border); border-radius: 12px; font-weight: 700; color: var(--text-primary); font-size: 0.9rem; user-select: none;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span>📖 ${subtopic.name}</span>
              <span style="font-size: 0.75rem; font-weight: 500; color: var(--text-muted); background: rgba(99,102,241,0.06); padding: 1px 6px; border-radius: 6px;">${subtopic.concepts.length} concepts</span>
            </div>
            <span style="font-size: 0.8rem; transform: rotate(${isExpanded ? '90deg' : '0deg'}); transition: transform 0.2s ease; display: inline-block;">▶</span>
          </div>
          
          <!-- Accordion Content / Concepts List (Layer 3) -->
          <div style="display: ${isExpanded ? 'flex' : 'none'}; flex-direction: column; gap: 10px; padding: 12px 0 4px 10px;">
      `;

      subtopic.concepts.forEach((concept) => {
        html += `
          <div class="roadmap-concept-card" style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--card-border); padding: 10px 12px; border-radius: 10px; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;">
            <div style="display: flex; flex-direction: column; gap: 2px;">
              <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary); display: flex; align-items: center; gap: 6px;">
                <span style="color: var(--accent); font-weight: 900;">↳</span> ${concept.name}
              </div>
              <div style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4;">${concept.desc}</div>
            </div>
            <button class="btn-primary" style="padding: 4px 8px; font-size: 0.7rem; border-radius: 6px; flex-shrink: 0;" onclick="app.handleConceptClick(event, '${concept.name}', '${concept.topic}')">
              Study
            </button>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  toggleRoadmapAccordion(event, subjectName, subIdx, containerId) {
    event.stopPropagation();
    const key = `${subjectName}-${subIdx}`;
    this.expandedSubtopics[key] = this.expandedSubtopics[key] === false;
    this.renderRoadmap(subjectName, 'knowledge-roadmap-root');
    this.renderRoadmap(subjectName, 'knowledge-roadmap-root-legacy');
  }

  changeRoadmapSubject(subjectName) {
    this.currentSubject = subjectName;
    const select = document.getElementById('roadmap-subject-select');
    if (select) select.value = subjectName;
    const selectLegacy = document.getElementById('roadmap-subject-select-legacy');
    if (selectLegacy) selectLegacy.value = subjectName;
    this.renderRoadmap(subjectName, 'knowledge-roadmap-root');
    this.renderRoadmap(subjectName, 'knowledge-roadmap-root-legacy');
  }

  handleConceptClick(event, conceptName, matchedTopic) {
    event.stopPropagation();
    this.loadTopic(matchedTopic, true);
  }

  // Flowchart rendering helper
  renderFlowchart(topic) {
    const flowTitle = document.getElementById('flow-topic-title');
    if (flowTitle) flowTitle.innerText = `${topic.title} Pathway Algorithm`;

    const flowSub = document.getElementById('flow-subtitle');
    if (flowSub) flowSub.innerText = `${topic.subject} — Clinical Management Steps`;

    const flowNodesWrap = document.getElementById('flowchart-nodes-wrap');
    if (!flowNodesWrap) return;

    flowNodesWrap.innerHTML = '';
    if (!topic.flowchart || topic.flowchart.length === 0) {
      flowNodesWrap.innerHTML = `<div style="padding:20px; text-align:center; color:var(--text-muted);">No flowchart available for this topic.</div>`;
      return;
    }

    topic.flowchart.forEach((node, idx) => {
      // Centered glowing SVG arrow pointing downwards
      if (idx > 0) {
        const arrow = document.createElement('div');
        arrow.style.display = 'flex';
        arrow.style.justifyContent = 'center';
        arrow.style.margin = '12px 0';
        arrow.style.zIndex = '3';
        arrow.style.position = 'relative';
        arrow.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 6px var(--primary));">
            <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="var(--primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;
        flowNodesWrap.appendChild(arrow);
      }

      const card = document.createElement('div');
      card.className = `flowchart-node-card ${idx === 0 ? 'active' : ''}`;
      card.innerHTML = `
        <div class="node-number">${node.num}</div>
        <div class="node-info">
          <div class="node-title">${node.title}</div>
          <div class="node-desc">${node.desc}</div>
        </div>
      `;
      card.onclick = () => this.toggleFlowchartNode(card, idx);

      const drawer = document.createElement('div');
      drawer.className = 'node-details-drawer';
      drawer.id = `flow-drawer-${idx}`;
      if (idx === 0) drawer.style.display = 'block';

      let optionsHtml = '';
      node.opts.forEach((opt, optIdx) => {
        optionsHtml += `<button class="checkpoint-opt-btn" onclick="app.checkFlowAnswer(this, ${idx}, ${optIdx}, ${node.ans})">${opt}</button>`;
      });

      drawer.innerHTML = `
        <p style="margin-bottom: 12px; line-height: 1.5; color: var(--text-secondary);">${node.details}</p>
        <div class="flowchart-checkpoint-box">
          <div class="checkpoint-q">Checkpoint: ${node.q}</div>
          <div class="checkpoint-options">
            ${optionsHtml}
          </div>
        </div>
      `;
      flowNodesWrap.appendChild(card);
      flowNodesWrap.appendChild(drawer);
    });
  }

  // Theme setup and control
  initTheme() {
    const savedTheme = localStorage.getItem('issac-theme') || 'light';
    this.setTheme(savedTheme);
  }

  setTheme(themeName) {
    const body = document.body;
    const btnLight = document.getElementById('theme-btn-light');
    const btnDark = document.getElementById('theme-btn-dark');
    
    if (themeName === 'dark') {
      body.classList.add('dark-mode');
      localStorage.setItem('issac-theme', 'dark');
      if (btnLight && btnDark) {
        btnLight.className = 'btn-outline';
        btnLight.classList.remove('btn-primary');
        btnDark.className = 'btn-primary';
        btnDark.classList.remove('btn-outline');
      }
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('issac-theme', 'light');
      if (btnLight && btnDark) {
        btnLight.className = 'btn-primary';
        btnLight.classList.remove('btn-outline');
        btnDark.className = 'btn-outline';
        btnDark.classList.remove('btn-primary');
      }
    }
  }
}

// Instantiate App
const app = new IssacApp();
window.onload = () => {
  app.init();
};
window.app = app;
