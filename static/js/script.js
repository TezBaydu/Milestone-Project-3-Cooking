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
  <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
  <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
</td>
<td class="pt-3-half food" contenteditable="true"></td>
<td class="pt-3-half count" contenteditable="true">
  <input name="count" class="no-spinner number-padding" type="tel" min="0" maxlength="3" placeholder="Quantity">
</td>
<td class="pt-3-half size" contenteditable="true"></td>
<td class="pt-3-half weight" contenteditable="true">
  <input name="weight" class="no-spinner number-padding" type="tel" min="0" maxlength="3" placeholder="(kg)">
</td>
<td class="pt-3-half volume" contenteditable="true">
  <input name="volume" class="no-spinner number-padding" type="tel" min="0" maxlength="3" placeholder="(lb)">
</td>
  <td>
    <span class="table-remove"
      ><button
        type="button"
        class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light"
      >
        Remove
      </button></span
    >
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