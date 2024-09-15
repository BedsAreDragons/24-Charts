function displayCharts() {
    var selectedAirport = document.getElementById('airports').value;

    var allChartCategories = document.querySelectorAll('.chart-category');
    allChartCategories.forEach(function(category) {
        category.style.display = 'none';
    });

    if (selectedAirport === 'ISAU') {
        document.getElementById('gnd-charts').style.display = 'block';
        document.getElementById('sid-charts').style.display = 'block';
        document.getElementById('star-charts').style.display = 'block';
    } else if (selectedAirport === 'IRFD') {
        document.getElementById('gnd-charts-irfd').style.display = 'block';
        document.getElementById('sid-charts-irfd').style.display = 'block';
        document.getElementById('star-charts-irfd').style.display = 'block';
    } else if (selectedAirport === 'IPPH') {
        document.getElementById('gnd-charts-ipph').style.display = 'block';
        document.getElementById('sid-charts-ipph').style.display = 'block';
        document.getElementById('star-charts-ipph').style.display = 'block';
    } else if (selectedAirport === 'ITKO') {
        document.getElementById('gnd-charts-itko').style.display = 'block';
        document.getElementById('sid-charts-itko').style.display = 'block';
        document.getElementById('star-charts-itko').style.display = 'block';
    } else if (selectedAirport === 'IZOL') {
        document.getElementById('gnd-charts-izol').style.display = 'block';
        document.getElementById('sid-charts-izol').style.display = 'block';
        document.getElementById('star-charts-izol').style.display = 'block';
    } else if (selectedAirport === 'ILAR') {
        document.getElementById('gnd-charts-ilar').style.display = 'block';
        document.getElementById('sid-charts-ilar').style.display = 'block';
        document.getElementById('star-charts-ilar').style.display = 'block';
    } else if (selectedAirport === 'IGRV') {
        document.getElementById('gnd-charts-igrv').style.display = 'block';
        document.getElementById('sid-charts-igrv').style.display = 'block';
        document.getElementById('star-charts-igrv').style.display = 'block';
    } else if (selectedAirport === 'IMLR') {
        document.getElementById('gnd-charts-imlr').style.display = 'block';
        document.getElementById('sid-charts-imlr').style.display = 'block';
        document.getElementById('star-charts-imlr').style.display = 'block';
    } else if (selectedAirport === 'IBTH') {
        document.getElementById('gnd-charts-ibth').style.display = 'block';
        document.getElementById('sid-charts-ibth').style.display = 'block';
        document.getElementById('star-charts-ibth').style.display = 'block';
    } else if (selectedAirport === 'IPAP') {
        document.getElementById('gnd-charts-ipap').style.display = 'block';
        document.getElementById('sid-charts-ipap').style.display = 'block';
        document.getElementById('star-charts-ipap').style.display = 'block';
    }
}

function showChart(chartType) {
    var chartImage = document.getElementById('chart-image');
    var chartDisplay = document.getElementById('selected-chart');
    
    // ISAU
    if (chartType === 'airport-diagram') {
        chartImage.src = 'ISAU/ISAU_Airport Diagram.png';
    } else if (chartType === 'sid1') {
        chartImage.src = 'ISAU/ISAU_SHREK1M, SPACE1M, BEANS1M, ALDER1M DEP.png';
    } else if (chartType === 'sid2') {
        chartImage.src = 'ISAU/ISAU_SHREK1L, SPACE1L, BEANS1L, ALDER1L DEP.png';
    } else if (chartType === 'sid3') {
        chartImage.src = 'ISAU/ISAU_SHREK1K, SPACE1K, BEANS1K, ALDER1K DEP.png';
    } else if (chartType === 'sid4') {
        chartImage.src = 'ISAU/ISAU_SHREK1J, SPACE1J, BEANS1J, ALDER1J DEP.png';
    } else if (chartType === 'star1') {
        chartImage.src = 'ISAU/ISAU_SHREK1R, BEANS1R, SPACE1R, ALDER1R ARR.png';
    } else if (chartType === 'star2') {
        chartImage.src = 'ISAU/ISAU_SHREK1T, BEANS1T, SPACE1T, ALDER1T ARR.png';
    } else if (chartType === 'star3') {
        chartImage.src = 'ISAU/ISAU_SHREK1S, BEANS1S, SPACE1S, ALDER1S ARR.png';
    
    // IRFD
    } else if (chartType === 'irfd-airport-diagram') {
        chartImage.src = 'IRFD/IRFD_Airport Diagram.png';
    } else if (chartType === 'irfd-sid1') {
        chartImage.src = 'IRFD/IRFD_LOGAN4.LOGAN DEP.png';
    } else if (chartType === 'irfd-sid2') {
        chartImage.src = 'IRFD/IRFD_KENED2.KENED DEP.png';
    } else if (chartType === 'irfd-sid3') {
        chartImage.src = 'IRFD/IRFD_OSHNN1.OSHNN DEP.png';
    } else if (chartType === 'irfd-sid4') {
        chartImage.src = 'IRFD/IRFD_RFD5.RFD DEP.png';
    } else if (chartType === 'irfd-sid5') {
        chartImage.src = 'IRFD/IRFD_TRN1.TRN DEP.png';
    } else if (chartType === 'irfd-sid6') {
        chartImage.src = 'IRFD/IRFD_WNNDY3.WNNDY DEP.png';
    } else if (chartType === 'irfd-star1') {
        chartImage.src = 'IRFD/IRFD_BEANS.BEANS1 ARR.png';
    } else if (chartType === 'irfd-star2') {
        chartImage.src = 'IRFD/IRFD_SETHR.POPPY2 ARR.png';
    } else if (chartType === 'irfd-star3') {
        chartImage.src = 'IRFD/IRFD_SUNST.SUNST2 ARR.png';
    } else if (chartType === 'irfd-star4') {
        chartImage.src = 'IRFD/IRFD_KENED.KUNAV1 ARR.png';
    }

    // IPPH
    else if (chartType === 'ipph-airport-diagram') {
        chartImage.src = 'IPPH/IPPH_Airport Diagram.png';
    } else if (chartType === 'ipph-sid1') {
        chartImage.src = 'IPPH/IPPH_DINER1.DINER DEP.png';
    } else if (chartType === 'ipph-sid2') {
        chartImage.src = 'IPPH/IPPH_CAMEL1.CAMEL DEP.png';
    } else if (chartType === 'ipph-sid3') {
        chartImage.src = 'IPPH/IPPH_PER1.PER DEP.png';
    } else if (chartType === 'ipph-star1') {
        chartImage.src = 'IPPH/IPPH_SISTA.SISTA1 ARR.png';
    } else if (chartType === 'ipph-star2') {
        chartImage.src = 'IPPH/IPPH_TALIS.TALIS1 ARR.png';
    } else if (chartType === 'ipph-star3') {
        chartImage.src = 'IPPH/IPPH_HONDA.HONDA1 ARR.png';
    }

    // ITKO
    else if (chartType === 'itko-airport-diagram') {
        chartImage.src = 'ITKO/ITKO_Airport Diagram.png';
    } else if (chartType === 'itko-sid1') {
        chartImage.src = 'ITKO/ITKO_BLANK1W, EURAD1W, HONDA1W, ONDER1W, RENDR1W DEP.png';
    } else if (chartType === 'itko-sid2') {
        chartImage.src = 'ITKO/ITKO_ONDER2A, RENDR2A, ONDER2D, RENDR2D DEP.png';
    } else if (chartType === 'itko-sid3') {
        chartImage.src = 'ITKO/ITKO_BLANK1X, EURAD1X, HONDA1X, ONDER1X, RENDR1X DEP.png';
    } else if (chartType === 'itko-sid4') {
        chartImage.src = 'ITKO/ITKO_BLANK1Y, EURAD1Y, HONDA1Y, ONDER1Y, RENDR1Y DEP.png';
    } else if (chartType === 'itko-sid5') {
        chartImage.src = 'ITKO/ITKO_BLANK1Z, EURAD1Z, HONDA1Z, ONDER1Z, RENDR1Z DEP.png';
    } else if (chartType === 'itko-sid6') {
        chartImage.src = 'ITKO/ITKO_ONDER2B, RENDR2B, ONDER2C, RENDR2C DEP.png';
    } else if (chartType === 'itko-sid7') {
        chartImage.src = 'ITKO/ITKO_BLANK2C, EURAD2C, BLANK2D, EURAD2D DEP.png';
    } else if (chartType === 'itko-sid8') {
        chartImage.src = 'ITKO/ITKO_HONDA2A, HONDA2B, HONDA2C, HONDA2D DEP.png';
    } else if (chartType === 'itko-star1') {
        chartImage.src = 'ITKO/ITKO_BLANK1H, EURAD1H, HONDA1H, ONDER1H, RENDER1H ARR.png';
    } else if (chartType === 'itko-star2') {
        chartImage.src = 'ITKO/ITKO_HONDA1P, HONDA2H. ONDER1P, ARR.png';
    } else if (chartType === 'itko-star3') {
        chartImage.src = 'ITKO/ITKO_BLANK1E, EURAD1E, HONDA1E, ONDER1E, RENDR1E ARR.png';
    } else if (chartType === 'itko-star4') {
        chartImage.src = 'ITKO/ITKO_BLANK1N, EURAD1N, BLANK1S, EURAD1S ARR .png';
    } else if (chartType === 'itko-star5') {
        chartImage.src = 'ITKO/ITKO_BLANK1K, EURAD1K, HONDA1K, ONDER1K, RENDR1K ARR.png';
    } else if (chartType === 'itko-star6') {
        chartImage.src = 'ITKO/ITKO_BLANK1L, EURAD1L, HONDA1L ARR.png';
    
    } else if (chartType === 'izol-airport-diagram') {
        chartImage.src = 'IZOL/IZOL_Airport Diagram.png';
    } else if (chartType === 'izol-sid1') {
        chartImage.src = 'IZOL/IZOL_DELIVERY1L, DUNKS1L, SILVA1L DEP.png';
    } else if (chartType === 'izol-sid2') {
        chartImage.src = 'IZOL/IZOL_DELIVERY1J, DUNKS1J, SILVA1J DEP.png';
    } else if (chartType === 'izol-star1') {
        chartImage.src = 'IZOL/IZOL_DELIVERY1K, DUNKS1K, SILVA1K ARR.png';
    } else if (chartType === 'izol-star2') {
        chartImage.src = 'IZOL/IZOL_DELIVERY1H, DUNKS1H, SILVA1H ARR.png';
    
    } else if (chartType === 'ilar-airport-diagram') {
        chartImage.src = 'ILAR/ILAR_Airport Diagram.png';
    } else if (chartType === 'ilar-sid1') {
        chartImage.src = 'ILAR/ILAR_ANYMS1J, JAMSI1J, JUSTY1J, REAPR1J DEP.png';
    } else if (chartType === 'ilar-sid2') {
        chartImage.src = 'ILAR/ILAR_ANYMS1L, JAMSI1L, JUSTY1L, REAPR1L DEP.png';
    } else if (chartType === 'ilar-star1') {
        chartImage.src = 'ILAR/ILAR_REAPR1K, JAMSI1K, ANYMS1K, JUSTY1K ARR.png';
    } else if (chartType === 'ilar-star2') {
        chartImage.src = 'ILAR/ILAR_REAPR1M, JAMSI1M, ANYMS1M, JUSTY1M ARR.png';

    } else if (chartType === 'igrv-airport-diagram') {
        chartImage.src = 'IGRV/IGRV_Airport Diagram.png';
    } else if (chartType === 'igrv-sid1') {
        chartImage.src = 'IGRV/IGRV_CELAR4.CELAR DEP.png';
    } else if (chartType === 'igrv-sid2') {
        chartImage.src = 'IGRV/IGRV_GVK1.GVK DEP.png';
    } else if (chartType === 'igrv-sid3') {
        chartImage.src = 'IGRV/IGRV_THENR3.BLANK DEP.png';
    } else if (chartType === 'igrv-sid4') {
        chartImage.src = 'IGRV/IGRV_YOUTH4.YOUTH DEP.png';
    } else if (chartType === 'igrv-star1') {
        chartImage.src = 'IGRV/IGRV_BLANK.GOLDN1 ARR.png';
    } else if (chartType === 'igrv-star2') {
        chartImage.src = 'IGRV/IGRV_HAWKN1.SPACE1 ARR.png';
    } else if (chartType === 'igrv-star3') {
        chartImage.src = 'IGRV/IGRV_SPACE.SPACE1 ARR.png';  

    } else if (chartType === 'imlr-airport-diagram') {
        chartImage.src = 'IMLR/IMLR_Airport Diagram.png';
    } else if (chartType === 'imlr-sid1') {
        chartImage.src = 'IMLR/IMLR_SPACE1T, MOGTA3T, SETHR1T, KENED2T, SUNST3T DEP.png';
    } else if (chartType === 'imlr-sid2') {
        chartImage.src = 'IMLR/IMLR_SPACE2R, MOGTA1R, SETHR2R, KENED4R, SUNST2R DEP.png';
    } else if (chartType === 'imlr-star1') {
        chartImage.src = 'IMLR/IMLR_QUEEN2K, ENDER1K, INDEX3K, SPACE2K, SETHR1K ARR.png';
    } else if (chartType === 'imlr-star2') {
        chartImage.src = 'IMLR/IMLR_QUEEN1D, ENDER3D, INDEX1D, SPACE2D, SETHR1D ARR.png'; 

    } else if (chartType === 'ibth-airport-diagram') {
        chartImage.src = 'IBTH/IBTH_Airport Diagram.png';
    } else if (chartType === 'ibth-sid1') {
        chartImage.src = 'IBTH/IBTH_RES1.RES DEP.png';
    } else if (chartType === 'ibth-sid2') {
        chartImage.src = 'IBTH/IBTH_OCEAN1.RES DEP.png';
    } else if (chartType === 'ibth-sid3') {
        chartImage.src = 'IBTH/IBTH_MONTN1.VOX DEP.png';
    } else if (chartType === 'ibth-sid4') {
        chartImage.src = 'IBTH/IBTH_VOX1.VOX DEP.png';
    } else if (chartType === 'ibth-star1') {
        chartImage.src = 'IBTH/IBTH_GAVIN.GAVIN1 ARR.png';
    } else if (chartType === 'ibth-star2') {
        chartImage.src = 'IBTH/IBTH_DINER.DINER1 ARR.png'; 
    } else if (chartType === 'ibth-star3') {
        chartImage.src = 'IBTH/IBTH_CAMEL.CAMEL1 ARR.png';
    } else if (chartType === 'ibth-star4') {
        chartImage.src = 'IBTH/IBTH_SILVA.SILVA1 ARR.png'; 
    } else if (chartType === 'ibth-star5') {
        chartImage.src = 'IBTH/IBTH_WELSH.WELSH1 ARR.png'; 
    } else if (chartType === 'ibth-star6') {
        chartImage.src = 'IBTH/IBTH_ROM.ROM1 ARR.png'; 
    
    } else if (chartType === 'ipap-airport-diagram') {
        chartImage.src = 'IPAP/IPAP_Airport Diagram.png';
    } else if (chartType === 'ipap-sid1') {
        chartImage.src = 'IPAP/IPAP_PFO1.PFO DEP.png';
    } else if (chartType === 'ipap-sid2') {
        chartImage.src = 'IPAP/IPAP_KIN1.KIN DEP.png';
    } else if (chartType === 'ipap-star1') {
        chartImage.src = 'IPAP/IPAP_JUSTY.JUSTY1 ARR.png';
    } else if (chartType === 'ipap-star2') {
        chartImage.src = 'IPAP/IPAP_JAMSI.JAMSI1 ARR.png';
    }

    chartDisplay.style.display = 'block';
}

document.getElementById('airports').addEventListener('change', displayCharts);

document.querySelectorAll('.chart-item').forEach(function(item) {
    item.addEventListener('click', function() {
        showChart(this.getAttribute('data-chart'));
    });
});

document.querySelectorAll('.chart-category h2').forEach(function(header) {
    header.addEventListener('click', function() {
        var category = this.nextElementSibling;
        if (category.style.display === 'none' || !category.style.display) {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });
});
document.getElementById('chart-image').addEventListener('click', function() {
    var chartImage = this;
    if (chartImage.classList.contains('zoomed')) {
        chartImage.classList.remove('zoomed');  
    } else {
        chartImage.classList.add('zoomed');  
    }
});