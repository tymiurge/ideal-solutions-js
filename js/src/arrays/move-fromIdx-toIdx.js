const move = (arr, oldIdx, newIdx) => {
  const array = [...arr];
  array.splice(newIdx, 0, array.splice(oldIdx, 1)[0]);
  return array;
}
