var Matrix = function () {
    this.positions  = {
        pi : PI,
        phi : PHI,
        euler :EULER,
        sqrt : SQRT2,
        sqrt3: SQRT3,
        sqrt5: SQRT5,
        sqrt7: SQRT7,
        lemni: LEMNI,
        zeta: ZETA
    };
    this.position = 0;
    this.matrixType = '';
    this.activeIrrationals = ['pi'];
};

Matrix.prototype.clearCounters = function () {
    let ele, eleString;
    // Clear matrixsum
    for (let i = 0; i < 10; i++) {
        eleString = '#matrixLabel' + i;
        ele = $(eleString);
        ele.attr('title', '0');
        ele.attr('data-original-title', '0');
    }
}

Matrix.prototype.clearNumberHighlightsRow = function (row) {
    $('#matrixTable td').each(function () {
        if ($(this).attr('data-active-highlight') === row) {
            $(this).removeClass('bold-light-green');
            $(this).removeClass('glow');
            $(this).attr('data-active-highlight', '');
        }
    });
}

Matrix.prototype.highlightNumber = function (row) {

    // clear current highlights
    this.getMatrixType();

    this.clearNumberHighlightsRow(row);
    this.getStartPosition();
    let elementName = '#highlightInput' + row;
    let highlightInput = $(elementName);
    let sumElement = '#matrixsum' + row;
    let matrixSum = $(sumElement);
    matrixSum.html('0');

    let number = parseInt(highlightInput.val());

    if (number === undefined) return;

    let numberString = number.toString();
    let numberLength = numberString.length;

    let irn = new IrrationalNumber(this.matrixType.toUpperCase());
    let indexes = irn.getAllIndexesForRange(number, this.position, 1000);
    let element = '';
    let counter = 0;

    for (let index in indexes) {

        if (indexes.hasOwnProperty(index)) {
            counter ++;
            for (let i = 0; i < numberLength; i++) {
                element = '#matrix-position-' + (indexes[index] + i).toString();
                if ($(element).attr('data-active-highlight') === '') {
                    $(element).attr('data-active-highlight', row)
                }

                $(element).addClass('bold-light-green').addClass('glow');
            }
        }
    }

    // set total on search box.
    if (counter > 0) {
        matrixSum.html(counter);
        highlightInput
            .attr('title', 'Found: ' + (counter))
            .attr('data-original-title', 'Found: ' + (counter));
    } else {
        highlightInput.attr('title', '').attr('data-original-title', '');
        matrixSum.html('0');
    }

}
Matrix.prototype.clearMatrix = function() {
    $('#highlightInputA').val('');
    $('#highlightInputB').val('');
    $('#matrixTable td').each(function () {
        $(this).removeClass('bold-light-green');
        $(this).removeClass('glow');
    });
}
Matrix.prototype.clearBoldLightGreenHighlights = function () {
    $('#matrixTable td').each(function () {
        $(this).removeClass('bold-light-green');
        $(this).removeClass('glow');
    });
}

Matrix.prototype.clearHighlight = function (number) {
    $('#matrixTable td').each(function () {

        if ($(this).text() === number) {
            $(this).removeClass('glow-green');
        }
    });
}

Matrix.prototype.clearGreenHighlights = function () {
    $('#matrixTable td').each(function () {
        $(this).removeClass('glow-green');
    });
}

Matrix.prototype.highlightDigits = function () {
    this.clearCounters();
    let digits = '',
        inputElement = '',
        spanElement = '';

    for (let i = 0; i < 10; i++) {
        inputElement = '#matrix' + i;
        spanElement = '#matrixLabel' + i;

        if ($(spanElement).attr('data-checked') === "1") {
            digits+=i;
        }
    }

    for (let digit in digits) {
        if (digits.hasOwnProperty(digit)) {
            let start = 0,
                spanString = '#matrixLabel' + digits[digit];


            $('#matrixTable td').each(function () {
                if ($(this).text() === digits[digit]) {
                    $(this).addClass('glow-green');
                    start ++;

                } else {
                    if (digits.indexOf($(this).text()) === -1) $(this).removeClass('glow-green');
                }
            });
            $(spanString)
                .attr('title', 'Found: ' + (start))
                .attr('data-original-title', 'Found: ' + (start) );
        }
    }
};

Matrix.prototype.getMatrixType = function () {
    this.matrixType = $('#matrixSelect').val();
};


Matrix.prototype.facPositions = function () {
    let searchA =$('#matrixFacPositionA'),
        searchB =$('#matrixFacPositionB');
    if (searchA.val() === "" || searchB.val() === "") {
        return;
    }

    this.getStartPosition();
    this.getMatrixType();
    let A = parseInt(this.position) + parseInt(searchA.val()) - 1,
        B = parseInt(this.position) + parseInt(searchB.val()) - 1,
        total = 1,
        type = this.positions[this.matrixType];

    for (let i = A; i <= B; i++) {
        if (parseInt(type.substr(i, 1)) > 0) {
            total *= parseInt(type.substr(i,1));
        }
    }

    $('#matrixFacResult').html(total).attr('data-totals', total);
}

Matrix.prototype.sumPositions = function () {
    let searchA =$('#matrixSearchPositionA'),
        searchB =$('#matrixSearchPositionB');
    if (searchA.val() === "" || searchB.val() === "") {
        return;
    }

    this.getStartPosition();
    this.getMatrixType();

    let A = parseInt(searchA.val()) - 1,
        B = parseInt(searchB.val()) - 1,
        total = 0,
        type = this.positions[this.matrixType];

    for (let i = A; i <= B; i++) {
        total += parseInt(type.substr(i,1));
    }

    $('#matrixSearchResult').html(total).attr('data-totals', total);

}

Matrix.prototype.setMatrixTypes = function () {
    let prefix = '#activeIrrationalsLabel-',
        ele = '';
    this.activeIrrationals = [];

    for (type in this.positions) {
        if (this.positions.hasOwnProperty(type)) {
            ele = prefix + type;

            if ($(ele).attr('data-checked') === '1') {
                this.activeIrrationals.push(type);
            }
        }
    }
}
Matrix.prototype.facPosition = function (type) {
    let searchA =$('#matrixFacPositionA'),
        searchB =$('#matrixFacPositionB');
    if (searchA.val() === "" || searchB.val() === "") {
        return;
    }

    let A = parseInt(this.position) + parseInt(searchA.val()) - 1,
        B = parseInt(this.position) + parseInt(searchB.val()) - 1,
        total = 1,
        irrational = this.positions[type];

    for (let i = A; i <= B; i++) {
        if (parseInt(irrational.substr(i, 1)) > 0) {
            total *= parseInt(irrational.substr(i,1));
        }
    }

    return total;
}

Matrix.prototype.facPositionsCombined = function () {
    this.setMatrixTypes();
    this.getStartPosition();

    let total = 0,
        type;

    for (type in this.activeIrrationals) {
        if (this.activeIrrationals.hasOwnProperty(type)) {
            total += this.facPosition(this.activeIrrationals[type]);
        }
    }

    $('#matrixFacResult').html(total).attr('data-totals', total);
}

Matrix.prototype.sumPositionsCombined = function () {
    this.setMatrixTypes();

    this.getStartPosition();

    let total = 0,
        type;

    if (this.activeIrrationals.length === 0) {
        this.getMatrixType();
        total = this.sumPositions();
    } else {
         for (type in this.activeIrrationals) {

            if (this.activeIrrationals.hasOwnProperty(type)) {
                total += this.sumPosition(this.activeIrrationals[type]);
            }
        }

    }
    $('#matrixSearchResult').html(total).attr('data-totals', total);
}

Matrix.prototype.sumPosition = function (type) {
    let searchA =$('#matrixSearchPositionA'),
        searchB =$('#matrixSearchPositionB');
    if (searchA.val() === "" || searchB.val() === "") {
        return;
    }

    let A = parseInt(searchA.val()) - 1,
        B = parseInt(searchB.val()) - 1,
        total = 0,
        irrational = this.positions[type];

    for (let i = A; i <= B; i++) {
        total += parseInt(irrational.substr(i,1));
    }

    return total
}


Matrix.prototype.getStartPosition = function () {
    this.position = $('#matrixLoopIndex').val() - 1;
};

Matrix.prototype.activateIrrationalButtons = function () {
    for (type in this.positions) {
        if (this.positions.hasOwnProperty(type)) {
            $(this).on('click', function () {
                if (undefined === $(this).attr('checked')) {
                    $(this).attr('checked', true);
                } else {
                    $(this).attr('checked', undefined);
                }
            });
        }
    }
}

Matrix.prototype.setActiveList = function () {
    let prefix = '#activeIrrationalsLabel-',
        ele = ''
        irrationalString = '',
        first = true;

    for (irrational in this.positions) {
        if (this.positions.hasOwnProperty(irrational)) {
            ele = prefix + irrational;

            if ($(ele).attr('data-checked') === '1') {
                if (false === first) {
                    irrationalString += ',';
                }
                first = false;
                irrationalString += $(ele).attr('data-label-on');

            }
        }

    }
     $('#activeIrrational').html(irrationalString);

}
Matrix.prototype.load = function () {

    this.activateIrrationalButtons();
    $('#matrixTable tbody').empty();
    this.getStartPosition();
    this.getMatrixType();
    let position = this.position,
        max = position + 1000,

        type = this.positions[this.matrixType],
        cellCounter = 0,
        firstRow = true,
        rowsHtml = '';

    if (undefined === type) {
        return;
    }

    for (let i = position; i < max; i++ ) {
        rowsHtml += '<td data-active-highlight="" class="matrix-cell" id="matrix-position-' + (i + 1) +'" title="' + (i + 1) +'">' + type.substr(i, 1) + '</td>';

        if (cellCounter === 49) {
            cellCounter = 0;
            rowsHtml = '<tr>' + rowsHtml + '</tr>';

            if (firstRow) {
                $('#matrixTable tbody').append(rowsHtml);
                firstRow = false;
            } else {
                $('#matrixTable tr:last').after(rowsHtml);
            }

            rowsHtml = '';
        } else {
            cellCounter++;
        }
    }
    $('#matrixTable td').each(function () {
        $(this).on('click', function () {
            let matrixSearchPositionA = $('#matrixSearchPositionA'),
                matrixSearchPositionB = $('#matrixSearchPositionB'),
                matrixFacPositionA = $('#matrixFacPositionA'),
                matrixFacPositionB = $('#matrixFacPositionB');

           if (matrixSearchPositionA.val() === "") {
               matrixSearchPositionA.val($(this)[0].title);
               matrixSearchPositionB.val('');
               matrixFacPositionA.val($(this)[0].title);
               matrixFacPositionB.val('');
           } else if (matrixSearchPositionB.val() === "") {
               matrixSearchPositionB.val($(this)[0].title);
               matrixFacPositionB.val($(this)[0].title);
           } else {
               matrixSearchPositionA.val($(this)[0].title);
               matrixFacPositionA.val($(this)[0].title);
               matrixSearchPositionB.val("");
               matrixFacPositionB.val("");
           }

           matrixSearchPositionA.trigger('input');
           matrixFacPositionA.trigger('input');
        });
    });

    // Set active in display
    $('#activeIrrational').html($('#matrixSelect option:selected').text());
};
