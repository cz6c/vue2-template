/**
 * 获取 blob
 * @param  {String} url 目标文件地址
 * @return {Promise}
 */
export function getBlob(url: string) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };

    xhr.send();
  });
}

/**
 * 保存
 * @param  {Blob} blob
 * @param  {String} filename 想要保存的文件名称
 */
export function saveAs(blob: Blob | unknown, filename: string) {
  const link = document.createElement("a");
  const body = document.querySelector("body");

  link.href = window.URL.createObjectURL(blob);
  link.download = filename;

  // fix Firefox
  link.style.display = "none";
  body?.appendChild(link);

  link.click();
  body?.removeChild(link);

  window.URL.revokeObjectURL(link.href);
}

/**
 * 下载
 * @param  {String} url 目标文件地址
 * @param  {String} filename 想要保存的文件名称
 */
export async function download(url: string, filename: string) {
  const blob = await getBlob(url);
  saveAs(blob, filename);
}

/**
 * 递归处理数据
 */
export function recursiveData(data: any[]) {
  return data.map(({ id: value, name: label, children }) => {
    const json: any = {
      value,
      label,
      id: value,
    };
    if (children && children.length > 0) {
      json.children = recursiveData(children);
    }
    return json;
  });
}
