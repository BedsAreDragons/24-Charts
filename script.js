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
    }
}

function showChart(chartType) {
    var chartImage = document.getElementById('chart-image');
    var chartDisplay = document.getElementById('selected-chart');
    
    // ISAU
    if (chartType === 'airport-diagram') {
        chartImage.src = 'ISAU/ISAU_Airport Diagram.png';
    } else if (chartType === 'sid1') {
        chartImage.src = 'ISAU/ISAU_DEP_26_1M.png';
    } else if (chartType === 'sid2') {
        chartImage.src = 'ISAU/ISAU_DEP_26_1L.png';
    } else if (chartType === 'sid3') {
        chartImage.src = 'ISAU/ISAU_DEP_08_1K.png';
    } else if (chartType === 'sid4') {
        chartImage.src = 'ISAU/ISAU_DEP_08_1J.png';
    } else if (chartType === 'star1') {
        chartImage.src = 'ISAU/ISAU_ARR_ALL_1R.png';
    } else if (chartType === 'star2') {
        chartImage.src = 'ISAU/ISAU_ARR_26_1T.png';
    } else if (chartType === 'star3') {
        chartImage.src = 'ISAU/ISAU_ARR_08_1S.png';
    
    // IRFD
    } else if (chartType === 'irfd-airport-diagram') {
        chartImage.src = 'IRFD/IRFD_Airport Diagram.png';
    } else if (chartType === 'irfd-sid1') {
        chartImage.src = 'IRFD/IRFD_LOGAN4.LOGAN DEP.png';
    } else if (chartType === 'irfd-sid2') {
        chartImage.src = 'IRFD/IRFD_KENED.KUNAV1 DEP.png';
    } else if (chartType === 'irfd-sid3') {
        chartImage.src = 'IRFD/IRFD_KENED2.KENED DEP.png';
    } else if (chartType === 'irfd-sid4') {
        chartImage.src = 'IRFD/IRFD_OSHNN1.OSHNN DEP.png';
    } else if (chartType === 'irfd-sid5') {
        chartImage.src = 'IRFD/IRFD_RFD5.RFD DEP.png';
    } else if (chartType === 'irfd-sid6') {
        chartImage.src = 'IRFD/IRFD_TRN1.TRN DEP.png';
    } else if (chartType === 'irfd-sid7') {
        chartImage.src = 'IRFD/IRFD_WNNDY3.WNNDY DEP.png';
    } else if (chartType === 'irfd-star1') {
        chartImage.src = 'IRFD/IRFD_BEANS.BEANS1 ARR.png';
    } else if (chartType === 'irfd-star2') {
        chartImage.src = 'IRFD/IRFD_SETHR.POPPY2 ARR.png';
    } else if (chartType === 'irfd-star3') {
        chartImage.src = 'IRFD/IRFD_SUNST.SUNST2 ARR.png';
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
        chartImage.src = 'ITKO/ITKO_DEP_02_1W.png';
    } else if (chartType === 'itko-sid2') {
        chartImage.src = 'ITKO/ITKO_DEP_02-31_2A-D.png';
    } else if (chartType === 'itko-sid3') {
        chartImage.src = 'ITKO/ITKO_DEP_13_1X.png';
    } else if (chartType === 'itko-sid4') {
        chartImage.src = 'ITKO/ITKO_DEP_20_1Y.png';
    } else if (chartType === 'itko-sid5') {
        chartImage.src = 'ITKO/ITKO_DEP_20-13_2B-C.png';
    } else if (chartType === 'itko-sid6') {
        chartImage.src = 'ITKO/ITKO_DEP_20-31_2C-D.png';
    } else if (chartType === 'itko-sid7') {
        chartImage.src = 'ITKO/ITKO_DEP_31_1Z.png';
    } else if (chartType === 'itko-sid8') {
        chartImage.src = 'ITKO/ITKO_DEP_ALL_2A-B-C-D.png';
    } else if (chartType === 'itko-star1') {
        chartImage.src = 'ITKO/ITKO_ARR_13_1H.png';
    } else if (chartType === 'itko-star2') {
        chartImage.src = 'ITKO/ITKO_ARR_13_2H.png';
    } else if (chartType === 'itko-star3') {
        chartImage.src = 'ITKO/ITKO_ARR_20_1E.png';
    } else if (chartType === 'itko-star4') {
        chartImage.src = 'ITKO/ITKO_ARR_20_1N.png';
    } else if (chartType === 'itko-star5') {
        chartImage.src = 'ITKO/ITKO_ARR_31_1K.png';
    } else if (chartType === 'itko-star6') {
        chartImage.src = 'ITKO/ITKO_ARR_31_1L.png';
    
    } else if (chartType === 'izol-airport-diagram') {
        chartImage.src = 'IZOL/IZOL_Airport Diagram.png';
    } else if (chartType === 'izol-sid1') {
        chartImage.src = 'IZOL/IZOL_DEP_10_1L.png';
    } else if (chartType === 'izol-sid2') {
        chartImage.src = 'IZOL/IZOL_DEP_28_1J.png';
    } else if (chartType === 'izol-star1') {
        chartImage.src = 'IZOL/IZOL_ARR_28_1K.png';
    } else if (chartType === 'izol-star2') {
        chartImage.src = 'IZOL/IZOL_ARR_10_1H.png';
    
    } else if (chartType === 'ilar-airport-diagram') {
        chartImage.src = 'ILAR/ILAR_Airport Diagram.png';
    } else if (chartType === 'ilar-sid1') {
        chartImage.src = 'ILAR/ILAR_DEP_06_1J.png';
    } else if (chartType === 'ilar-sid2') {
        chartImage.src = 'ILAR/ILAR_DEP_24_1L.png';
    } else if (chartType === 'ilar-star1') {
        chartImage.src = 'ILAR/ILAR_ARR_06_1K.png';
    } else if (chartType === 'ilar-star2') {
        chartImage.src = 'ILAR/ILAR_ARR_24_1M.png';
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
