$(()=>{
    const $selectExport = $('#select-export');
    $selectExport.on('change', ()=>{
        chrome.storage.local.set({export: $selectExport.val()}, ()=>{
            console.log('export', $selectExport.val());
        })
    })
    chrome.storage.local.get('export', (data)=>{
        $selectExport.val(data.export);
    })
})