var newOpen = window.open();

for (var value in navigator)
{
    newOpen.document.write(value + " = " + navigator[value] + "<br>");
}