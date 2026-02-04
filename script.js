function createFile(ext) {
    const filename = "Blank." + ext;
    const blob = new Blob([""], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
}
