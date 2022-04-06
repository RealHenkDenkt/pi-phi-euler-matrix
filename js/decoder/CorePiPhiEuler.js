$(document).ready(function (){
    let
        phiInput = $('#phiInput'),
        phiStringLoc = $('#phiStringLoc'),
        phiStringPosition = $('#phi-location-first'),
        phiStringSummedPosition = $('#phi-location-summed'),
        phiStringLocResult = $('#phistring-loc-result'),
        phiPositionIndex = $('#phi-position-index'),

        eInput = $('#eInput'),
        eStringLoc = $('#eStringLoc'),
        eStringPosition = $('#e-location-first'),
        eStringSummedPosition = $('#e-location-summed'),
        eStringLocResult = $('#estring-loc-result'),
        ePositionIndex = $('#e-position-index'),

        lemniInput = $('#lemniInput'),
        lemniStringLoc = $('#lemniStringLoc'),
        lemniStringPosition = $('#lemni-location-first'),
        lemniStringSummedPosition = $('#lemni-location-summed'),
        lemniStringLocResult = $('#lemnistring-loc-result'),
        lemniPositionIndex = $('#lemni-position-index'),

        zetaInput = $('#zetaInput'),
        zetaStringLoc = $('#zetaStringLoc'),
        zetaStringPosition = $('#zeta-location-first'),
        zetaStringSummedPosition = $('#zeta-location-summed'),
        zetaStringLocResult = $('#zetastring-loc-result'),
        zetaPositionIndex = $('#zeta-position-index'),

        sqrtInput = $('#sqrtInput'),
        sqrtStringLoc = $('#sqrtStringLoc'),
        sqrtStringPosition = $('#sqrt-location-first'),
        sqrtStringSummedPosition = $('#sqrt-location-summed'),
        sqrtStringLocResult = $('#sqrtstring-loc-result'),
        sqrtPositionIndex = $('#sqrt-position-index'),

        sqrt3Input = $('#sqrt3Input'),
        sqrt3StringLoc = $('#sqrt3StringLoc'),
        sqrt3StringPosition = $('#sqrt3-location-first'),
        sqrt3StringSummedPosition = $('#sqrt3-location-summed'),
        sqrt3StringLocResult = $('#sqrt3string-loc-result'),
        sqrt3PositionIndex = $('#sqrt3-position-index'),

        sqrt5Input = $('#sqrt5Input'),
        sqrt5StringLoc = $('#sqrt5StringLoc'),
        sqrt5StringPosition = $('#sqrt5-location-first'),
        sqrt5StringSummedPosition = $('#sqrt5-location-summed'),
        sqrt5StringLocResult = $('#sqrt5string-loc-result'),
        sqrt5PositionIndex = $('#sqrt5-position-index'),

        sqrt7Input = $('#sqrt7Input'),
        sqrt7StringLoc = $('#sqrt7StringLoc'),
        sqrt7StringPosition = $('#sqrt7-location-first'),
        sqrt7StringSummedPosition = $('#sqrt7-location-summed'),
        sqrt7StringLocResult = $('#sqrt7string-loc-result'),
        sqrt7PositionIndex = $('#sqrt7-position-index'),



        matrixSelect = $('#matrixSelect'),
        highlightInputA = $('#highlightInputA'),
        highlightInputB = $('#highlightInputB'),
        canvasHighlightInputA = $('#canvasHighlightInputA'),
        canvasHighlightInputB = $('#canvasHighlightInputB'),
        matrixLoopIndex = $('#matrixLoopIndex'),
        matrixClearButton = $('#clearHighlights'),
        matrixTable = $('#matrixTable'),
        matrixSearchPositionA = $('#matrixSearchPositionA'),
        matrixSearchPositionB = $('#matrixSearchPositionB'),
        matrixFacPositionA = $('#matrixFacPositionA'),
        matrixFacPositionB = $('#matrixFacPositionB'),
        piInput = $('#piInput'),
        piStringLoc = $('#piStringLoc'),
        piStringPosition = $('#pi-location-first'),
        piStringSummedPosition = $('#pi-location-summed'),
        piStringLocResult = $('#pistring-loc-result'),
        piPositionIndex = $('#pi-position-index'),
        positionsDetailsButton = $('#morePositions'),
        linkPositions = $('#linkPositions');

    $('#pi-location-first, ' +
    '#pi-location-summed, ' +
    '#e-location-first, ' +
    '#e-location-summed, ' +
    '#octaSearchResult, ' +
    '#matrixSearchResult, ' +
    '#matrixFacResult, ' +
    '#phi-location-first, ' +
    '#phi-location-summed, ' +
    '#sqrt-location-first, ' +
    '#sqrt-location-summed, ' +
    '#sqrt3-location-first, ' +
    '#sqrt3-location-summed, ' +
    '#sqrt5-location-first, ' +
    '#sqrt5-location-summed, ' +
    '#sqrt7-location-first, ' +
    '#sqrt7-location-summed, ' +
    '#zeta-location-first, ' +
    '#zeta-location-summed, ' +
    '#lemni-location-first, ' +
    '#lemni-location-summed')
        .on('click', function () {

    });

    let matrix = new Matrix();
    matrix.load();

    matrixSelect.on('change', function () {
        let matrix = new Matrix();
        matrix.load(matrixSelect.val());
        matrix.highlightDigits();
        matrix.highlightNumber();
        matrix.sumPositions();
        matrix.facPositions();
    });

    matrixLoopIndex.on('change', function () {
        let matrix = new Matrix();
        matrix.load();
        matrix.highlightDigits();
        matrix.highlightNumber();
        matrix.sumPositions();
        matrix.facPositions();
    });

    matrixClearButton.on('click', function () {
        matrix.clearMatrix();
    })

    positionsDetailsButton.on('click', function () {
        if (parseInt($(this).val()) === 1) {
            $(this).val(0);
            $('#positions-form-table .hidden').each(function (){
                $(this).show();
            });
        } else {
            $(this).val(1);
            $('#positions-form-table .hidden').each(function (){
                $(this).hide();
            });
        }
    });

    $('#matrixTable .custom-toggle-slider').each(function () {
        $(this).on('click', function () {
            let matrix = new Matrix();
            if ($(this).attr('data-checked') === "0") {
                $(this).attr('data-checked', "1") ;
            } else {
                $(this).attr('data-checked', "0");
                matrix.clearHighlight($(this).attr('data-value'));
            }


            matrix.highlightDigits();
            matrix.highlightNumber();
        });
    });
    $('#activeIrrationalsTable .custom-toggle-slider').each(function () {
        $(this).on('click', function () {
            let matrix = new Matrix();
            if ($(this).attr('data-checked') === "0") {
                $(this).attr('data-checked', "1") ;
            } else {
                $(this).attr('data-checked', "0");
            }

            matrix.sumPositionsCombined();
            matrix.facPositionsCombined();
            matrix.setActiveList();
        });
    });
    highlightInputA.on('input', function () {
        let matrix = new Matrix();
        matrix.highlightNumber('A');
    });
    highlightInputB.on('input', function () {
        let matrix = new Matrix();
        matrix.highlightNumber('B');
    });


    matrixSearchPositionA.on('input', function (){
        let matrix = new Matrix();
        matrix.sumPositionsCombined();
    });

    matrixSearchPositionB.on('input', function (){
        let matrix = new Matrix();
        matrix.sumPositionsCombined();
    });

    matrixFacPositionA.on('input', function () {
        let matrix = new Matrix();
        matrix.facPositionsCombined();
    })
    matrixFacPositionB.on('input', function () {
        let matrix = new Matrix();
        matrix.facPositionsCombined();
    })

    piPositionIndex.on('change', function () {
        searchIrrationalPosition('PI', parseInt(piInput.val()));
    });

    phiStringLoc.on('input', function () {
        showIrrationalStringLocation('PHI', $(this).val());
    });
    phiPositionIndex.on('change', function () {
        searchIrrationalPosition('PHI', parseInt(phiInput.val()));
    });

    eInput.on('input', function () {
        searchIrrationalPosition('EULER', parseInt(eInput.val()));
    });
    eStringLoc.on('input', function () {
        showIrrationalStringLocation('EULER', $(this).val());
    });
    ePositionIndex.on('change', function () {
        searchIrrationalPosition('EULER', parseInt(eInput.val()));
    });

    lemniInput.on('input', function () {
        searchIrrationalPosition('LEMNI', parseInt(lemniInput.val()));
    })

    lemniStringLoc.on('input', function () {
        showIrrationalStringLocation('LEMNI', $(this).val());
    });

    lemniPositionIndex.on('change', function () {
        searchIrrationalPosition('LEMNI', parseInt(lemniInput.val()));
    });

    zetaInput.on('input', function () {
        searchIrrationalPosition('ZETA', parseInt(zetaInput.val()));
    })

    zetaStringLoc.on('input', function () {
        showIrrationalStringLocation('ZETA', $(this).val());
    });

    zetaPositionIndex.on('change', function () {
        searchIrrationalPosition('ZETA', parseInt(zetaInput.val()));
    });
    sqrtInput.on('input', function () {
        searchIrrationalPosition('SQRT', parseInt(sqrtInput.val()));
    });

    sqrtStringLoc.on('input', function () {
        showIrrationalStringLocation('SQRT', $(this).val());
    });

    sqrtPositionIndex.on('change', function (){
        searchIrrationalPosition('SQRT', parseInt(sqrtInput.val()));
    });


    sqrt3Input.on('input', function () {
        searchIrrationalPosition('SQRT3', parseInt(sqrt3Input.val()));
    });

    sqrt3StringLoc.on('input', function () {
        showIrrationalStringLocation('SQRT3', $(this).val());
    });

    sqrt3PositionIndex.on('change', function (){
        searchIrrationalPosition('SQRT3', parseInt(sqrt3Input.val()));
    });


    sqrt5Input.on('input', function () {
        searchIrrationalPosition('SQRT5', parseInt(sqrt5Input.val()));
    });

    sqrt5StringLoc.on('input', function () {
        showIrrationalStringLocation('SQRT5', $(this).val());
    });

    sqrt5PositionIndex.on('change', function (){
        searchIrrationalPosition('SQRT5', parseInt(sqrt5Input.val()));
    });

    sqrt7Input.on('input', function () {
        searchIrrationalPosition('SQRT7', parseInt(sqrt7Input.val()));
    });

    sqrt7StringLoc.on('input', function () {
        showIrrationalStringLocation('SQRT7', $(this).val());
    });

    sqrt7PositionIndex.on('change', function (){
        searchIrrationalPosition('SQRT7', parseInt(sqrt7Input.val()));
    });

    piInput.on('input', function () {
        searchIrrationalPosition('PI', parseInt(piInput.val()));
    });

    phiInput.on('input', function () {
        searchIrrationalPosition('PHI', parseInt(phiInput.val()));
    });


    piStringLoc.on('input', function () {
        //showPiStringLocation();
        showIrrationalStringLocation('PI', $(this).val());
    });

    function linkIndexFields (number) {
        if (undefined === number) return;
        number = parseInt(number);

        let fields = [
            piPositionIndex,
            phiPositionIndex,
            ePositionIndex,
            sqrtPositionIndex,
            sqrt3PositionIndex,
            sqrt5PositionIndex,
            sqrt7PositionIndex,
            lemniPositionIndex,
            zetaPositionIndex
        ]

        for (let i = 0; i < fields.length; i++) {
            if (number !== parseInt(fields[i].val())) {
                fields[i].val(number);
            }
        }

    }

    function linkPositionFields (number) {
        if (undefined === number) return;
        number = parseInt(number);

        let fields = [
            piInput,
            phiInput,
            eInput,
            sqrtInput,
            sqrt3Input,
            sqrt5Input,
            sqrt7Input,
            lemniInput,
            zetaInput
        ]

        for (let i = 0; i < fields.length; i++) {
            if (number !== parseInt(fields[i].val())) {
                fields[i].val(number);
            }
        }
    }

    function linkLocationFields (number) {
        if (undefined === number) return;
        number = parseInt(number);

        let fields = [
            piStringLoc,
            phiStringLoc,
            eStringLoc,
            sqrtStringLoc,
            sqrt3StringLoc,
            sqrt5StringLoc,
            sqrt7StringLoc,
            lemniStringLoc,
            zetaStringLoc
        ]

        for (let i = 0; i < fields.length; i++) {
            if (number !== parseInt(fields[i].val())) {
                fields[i].val(number);
            }
        }
    }

    function getIrrationalStringLocation (type, stringLoc, stringLocResult) {
        let irrationalNumber = new IrrationalNumber(type);
        let number = parseInt(stringLoc.val());
        let html = irrationalHtml(irrationalNumber.getStringLocation(number));
        stringLocResult.html(html);
    }

    function showIrrationalStringLocation  (type, number) {
        // Return if no input
        let element = '#'+type.toLowerCase()+'StringLoc';

        if ($(element).val() === '') return;

        if (false === $('#linkPositions')[0].checked ) {
            linkLocationFields(number);
            getIrrationalStringLocation('PI', piStringLoc, piStringLocResult);
            getIrrationalStringLocation('PHI', phiStringLoc, phiStringLocResult);
            getIrrationalStringLocation('EULER', eStringLoc, eStringLocResult);
            getIrrationalStringLocation('SQRT', sqrtStringLoc, sqrtStringLocResult);
            getIrrationalStringLocation('SQRT3', sqrt3StringLoc, sqrt3StringLocResult);
            getIrrationalStringLocation('SQRT5', sqrt5StringLoc, sqrt5StringLocResult);
            getIrrationalStringLocation('SQRT7', sqrt7StringLoc, sqrt7StringLocResult);
            getIrrationalStringLocation('LEMNI', lemniStringLoc, lemniStringLocResult);
            getIrrationalStringLocation('SQRT',  zetaStringLoc, zetaStringLocResult);
        } else {
            switch (type) {
                case 'PI':
                    getIrrationalStringLocation('PI', piStringLoc, piStringLocResult);
                    break;
                case 'PHI':
                    getIrrationalStringLocation('PHI', phiStringLoc, phiStringLocResult);
                    break;
                case 'EULER':
                    getIrrationalStringLocation('EULER', eStringLoc, eStringLocResult);
                    break;
                case 'SQRT':
                    getIrrationalStringLocation('SQRT', sqrtStringLoc, sqrtStringLocResult);
                    break;
                case 'SQRT3':
                    getIrrationalStringLocation('SQRT3', sqrt3StringLoc, sqrt3StringLocResult);
                    break;
                case 'SQRT5':
                    getIrrationalStringLocation('SQRT5', sqrt5StringLoc, sqrt5StringLocResult);
                    break;
                case 'SQRT7':
                    getIrrationalStringLocation('SQRT7', sqrt7StringLoc, sqrt7StringLocResult);
                    break;
                case 'LEMNI':
                    getIrrationalStringLocation('LEMNI', lemniStringLoc, lemniStringLocResult);
                    break;
                case 'ZETA':
                    getIrrationalStringLocation('SQRT', zetaStringLoc, zetaStringLocResult);
                    break;
            }
        }

    }

    function searchIrrationalPosition (type, number) {
        // Return if no input
        let element = '#'+type.toLowerCase()+'Input';
        if ($(element).val() === '') return;

        if (false === $('#linkPositions')[0].checked ) {
            linkPositionFields(number);
            getIrrationalPosition('PI', number, piStringPosition, piStringSummedPosition);
            getIrrationalPosition('PHI', number, phiStringPosition, phiStringSummedPosition);
            getIrrationalPosition('EULER', number, eStringPosition, eStringSummedPosition);
            getIrrationalPosition('SQRT', number, sqrtStringPosition, sqrtStringSummedPosition);
            getIrrationalPosition('SQRT3', number, sqrt3StringPosition, sqrt3StringSummedPosition);
            getIrrationalPosition('SQRT5', number, sqrt5StringPosition, sqrt5StringSummedPosition);
            getIrrationalPosition('SQRT7', number, sqrt7StringPosition, sqrt7StringSummedPosition);
            getIrrationalPosition('LEMNI', number, lemniStringPosition, lemniStringSummedPosition);
            getIrrationalPosition('ZETA', number, zetaStringPosition, zetaStringSummedPosition);
        } else {
            switch (type) {
                case 'PI':
                    getIrrationalPosition('PI', number, piStringPosition, piStringSummedPosition);
                    break;
                case 'PHI':
                    getIrrationalPosition('PHI', number, phiStringPosition, phiStringSummedPosition);
                    break;
                case 'EULER':
                    getIrrationalPosition('EULER', number, eStringPosition, eStringSummedPosition);
                    break;
                case 'SQRT':
                    getIrrationalPosition('SQRT', number, sqrtStringPosition, sqrtStringSummedPosition);
                    break;
                case 'SQRT3':
                    getIrrationalPosition('SQRT3', number, sqrt3StringPosition, sqrt3StringSummedPosition);
                    break;
                case 'SQRT5':
                    getIrrationalPosition('SQRT5', number, sqrt5StringPosition, sqrt5StringSummedPosition);
                    break;
                case 'SQRT7':
                    getIrrationalPosition('SQRT7', number, sqrt7StringPosition, sqrt7StringSummedPosition);
                    break;
                case 'LEMNI':
                    getIrrationalPosition('LEMNI', number, lemniStringPosition, lemniStringSummedPosition);
                    break;
                case 'ZETA':
                    getIrrationalPosition('ZETA', number, zetaStringPosition, zetaStringSummedPosition);
                    break;
            }
        }
    }

    function getIrrationalPosition(type, number, position, summedPosition) {
        summedPosition.html('');
        position.html('');
        let indexElement = $('#'+type.toLowerCase()+'PositionIndex');

        let irrational = new IrrationalNumber(type),
            positions,
            index = parseInt(indexElement.val());
        if (index > 1) {
            positions = irrational.searchDeep(number, index);
        } else {
            positions = irrational.search(number);
        }

        if (positions.length > 0) {
            position.html(positions[0]).attr('data-totals', positions[0]);

            if (positions.length > 1) {
                let p = positions.reduce((a, b) => a + b, 0);
                summedPosition.html(p).attr('data-totals', p);
            }
        }
    }



    function irrationalHtml(str) {
        let start = '<em class="irrationalStart">'+ str.substr(0,9) + '</em>';
        let middle = '<em class="irrationalMiddle">' + str.substr(9, 10) + '</em>';
        let end = '<em class="irrationalEnd">' + str.substr(19, 10) + '</em>';
        str = start + middle + end;
        return str;
    }

    function showPhiStringLocation() {
        let phi = new IrrationalNumber('PHI');
        let number = phiStringLoc.val();
        let html = irrationalHtml(phi.getStringLocation(number));
        phiStringLocResult.html(html);
    }

    function showEStringLocation() {
        let e = new IrrationalNumber('E');
        let number = eStringLoc.val();
        let html = irrationalHtml(e.getStringLocation(number));
        eStringLocResult.html(html);
    }

    function showSqrtStringLocation() {
        let sqrt = new IrrationalNumber('SQRT');
        let number = sqrtStringLoc.val();
        let html = irrationalHtml(sqrt.getStringLocation(number));
        sqrtStringLocResult.html(html);
    }

    function showSqrt3StringLocation() {
        let sqrt = new IrrationalNumber('SQRT3');
        let number = sqrtStringLoc.val();
        let html = irrationalHtml(sqrt.getStringLocation(number));
        sqrt3StringLocResult.html(html);
    }
    function showSqrt5StringLocation() {
        let sqrt = new IrrationalNumber('SQRT5');
        let number = sqrt5StringLoc.val();
        let html = irrationalHtml(sqrt.getStringLocation(number));
        sqrt5StringLocResult.html(html);
    }
    function showSqrt7StringLocation() {
        let sqrt = new IrrationalNumber('SQRT7');
        let number = sqrt7StringLoc.val();
        let html = irrationalHtml(sqrt.getStringLocation(number));
        sqrt7StringLocResult.html(html);
    }


    function showlemniStringLocation() {
        let sqrt = new IrrationalNumber('LEMNI');
        let number = lemniStringLoc.val();
        let html = irrationalHtml(sqrt.getStringLocation(number));
        lemniStringLocResult.html(html);
    }

    function showZetaStringLocation() {
        let sqrt = new IrrationalNumber('ZETA');
        let number = zetaStringLoc.val();
        let html = irrationalHtml(sqrt.getStringLocation(number));
        zetaStringLocResult.html(html);
    }

});


