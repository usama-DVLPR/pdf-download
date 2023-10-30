function generatePDF() {
    var element = document.getElementById('divToExport');
    element.style.width = '700px';
    element.style.height = '900px';
    var opt = {
        // margin:       0.5,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 1, useCORS: true }, 
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait', precision: '12' }
    };

    html2pdf().set(opt).from(element).save();
}


