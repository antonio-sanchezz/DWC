var mByte = parseInt(prompt("Cantidad de Mbyte:"));
var kByte = parseInt(prompt("Cantidad de Kbyte:"));
var bytes = parseInt(prompt("Cantidad de bytes:"));

document.write(converter(mByte, kByte, bytes) + " bytes");

function converter(mByte, kByte, bytes) {
    result = 0;

    result = (mByte * 1048576) + (kByte * 1024) + bytes;

    return result;
}