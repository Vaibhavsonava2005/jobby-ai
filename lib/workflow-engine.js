/**
 * Simulates a workflow pipeline for AI processing
 */
export const WORKFLOW_STAGES = [
  { id: 'collecting', name: 'Analyzing Profile', description: 'Parsing your educational and demographic details', durationMs: 1200 },
  { id: 'scanning', name: 'Scanning Database', description: 'Searching 5000+ opportunities across India', durationMs: 1500 },
  { id: 'matching', name: 'AI Matching Engine', description: 'Evaluating eligibility criteria and matching scores', durationMs: 1800 },
  { id: 'ranking', name: 'Ranking Results', description: 'Prioritizing best matches based on success probability', durationMs: 1000 },
  { id: 'preparing', name: 'Preparing Applications', description: 'Formatting auto-apply links and guidelines', durationMs: 1200 }
];

export async function simulateWorkflow(onProgress) {
  for (let i = 0; i < WORKFLOW_STAGES.length; i++) {
    const stage = WORKFLOW_STAGES[i];
    onProgress({
      currentStageIndex: i,
      stage: stage,
      progress: (i / WORKFLOW_STAGES.length) * 100
    });
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, stage.durationMs));
  }
  
  onProgress({
    currentStageIndex: WORKFLOW_STAGES.length,
    stage: null,
    progress: 100,
    isComplete: true
  });
}
