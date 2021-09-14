// Menu nav click toggle

$('#featureDiscovery').click(function () {
  $('.feature-container-inside').toggleClass('active');

  $('.feature-trigger-outline').toggleClass('active');
});

// Create recipe form table

const $tableID = $('#table');
const $BTN = $('#export-btn');
const $EXPORT = $('#export');
const newTr = `
<tr class="hide">
<td class="pt-3-half">
    <span class="table-up"><a href="#!" class="indigo-text"><i
                class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
    <span class="table-down"><a href="#!" class="indigo-text"><i
                class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
</td>
<td class="pt-3-half food">
    <textarea name="food1" class="ingredient-text" minlength="2" maxlength="40"
    required></textarea>
</td>
<td class="pt-3-half count">
    <input name="count1" class="no-spinner number-padding" type="number" min="0" maxlength="3" placeholder="Quantity"
    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
</td>
<td class="pt-3-half size">
    <textarea name="size1" class="ingredient-text" minlength="2" maxlength="30" placeholder="e.g. Small, Medium, Large"
    ></textarea>
</td>
<td class="pt-3-half weight">
    <input name="weight1" class="no-spinner number-padding" type="number" min="0" maxlength="6" step="0.01" placeholder="(kg)"
    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
</td>
<td class="pt-3-half volume">
    <input name="volume1" class="no-spinner number-padding" type="number" min="0" maxlength="6" step="0.01" placeholder="(lb)"
    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
</td>

<td>
    <span class="table-remove"><button type="button"
            class="btn btn-danger btn-rounded btn-sm my-0">
            Remove
        </button></span>
</td>
</tr>
`;
$('.table-add').on('click', 'i', () => {
  const $clone= $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');
  if ($tableID.find('tbody tr').length ===
    0) {
    $('tbody').append(newTr);
  }
  $tableID.find('table').append($clone);
});
$tableID.on('click', '.table-remove', function () {
  $(this).parents('tr').detach();
});
$tableID.on('click', '.table-up', function () {
  const $row = $(this).parents('tr');
  if ($row.index() === 0) {
    return;
  }
  $row.prev().before($row.get(0));
});
$tableID.on('click',
  '.table-down',
  function () {
    const $row = $(this).parents('tr');
    $row.next().after($row.get(0));
  });
jQuery.fn.shift = [].shift;
$BTN.on('click', () => {
  const $rows =
    $tableID.find('tr:not(:hidden)');
  const headers = [];
  const data = [];
}); // Turn all existing rows into a loopable array 
$EXPORT.text(JSON.stringify(data));


// Steps create

