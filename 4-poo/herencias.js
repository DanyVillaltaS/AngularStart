var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var programa = /** @class */ (function () {
    function programa() {
    }
    programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    programa.prototype.getNombre = function () {
        return this.nombre;
    };
    programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    programa.prototype.getVersion = function () {
        return this.version;
    };
    return programa;
}());
var EditarVideo = /** @class */ (function (_super) {
    __extends(EditarVideo, _super);
    function EditarVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditarVideo.prototype.setTimeLine = function (timeLine) {
        this.timeLine = timeLine;
    };
    EditarVideo.prototype.getTimeLine = function () {
        return this.timeLine;
    };
    EditarVideo.prototype.getAllData = function () {
        return 'Nombre: ' + this.getNombre()
            + ' Version: ' + this.getVersion()
            + ' TimeLine: ' + this.getTimeLine();
    };
    return EditarVideo;
}(programa));
var programas = new EditarVideo();
programas.setNombre('AdobePremiere');
programas.setVersion(456);
programas.setTimeLine(45785);
console.log(programas.getAllData());
