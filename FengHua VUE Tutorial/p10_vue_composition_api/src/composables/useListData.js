import { ref } from "vue";

function useListData(data) {
  const dataRef = ref(data);

  function removeItem(id) {
    dataRef.value = dataRef.value.filter((item) => item.id !== id);
  }

  function sortByKey(key, direction = "asc") {
    dataRef.value = dataRef.value.sort((a, b) =>
      direction === "asc"
        ? a[key].localeCompare(b[key])
        : -a[key].localeCompare(b[key])
    );
  }

  return { data: dataRef, removeItem, sortByKey };
}

export default useListData;
