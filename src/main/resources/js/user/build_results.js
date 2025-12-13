let settings;

document.addEventListener('DOMContentLoaded', async () => {
    settings = await fetch('/get-module', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'result_view' })
    }).then(settingsRes => settingsRes.json()).then(data => data.settings);
    // Load student data (reuse endpoint from dashboard)
    const studentData = await fetchMyData();
    
    loadStudentResultView(studentData);
});