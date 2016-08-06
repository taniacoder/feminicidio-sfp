(function() {
    $(window).load(function() {
        $(document).ready(function() {
            Morris.Line({
                element: 'morris-area-chart',
                behaveLikeLine: true,
                data: [{
                    period: '2009',
                    t: 9,
                    f: 22
                }, {
                    period: '2010',
                    t: 6,
                    f: 8
                }, {
                    period: '2011',
                    t: 8,
                    f: 7
                }, {
                    period: '2012',
                    t: 13,
                    f: 7
                }, {
                    period: '2013',
                    t: 16,
                    f: 11
                }, {
                    period: '2014',
                    t: 16,
                    f: 8
                }, {
                    period: '2015',
                    t: 17,
                    f: 8
                }, {
                    period: '2016',
                    t: 20,
                    f: 9
                }],
                xkey: 'period',
                ykeys: ['t', 'f'],
                labels: ['Tentativa', 'Feminicidio'],
                pointSize: 6,
                hideHover: 'auto',
                resize: true,
                lineColors: ['#F47799', '#ED1C55'],
                gridTextSize: '14',
            });
            });
    });
})();