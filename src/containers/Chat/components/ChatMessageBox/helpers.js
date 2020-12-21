export const useCtrlEnterSubmit = e => ((e.key === 'Enter' && e.metaKey) || (e.key === 'Enter' && e.ctrlKey));
export const useEnterSubmit = e => (e.key === 'Enter' && !e.shiftKey);