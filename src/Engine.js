// Game Basic 3D Engine WebGL Build
// Copyright © Monarke Studios. All Rights Reserved.

var Engine = function() {

    var gl = null;

    this.Initialize = function (canvas) {

        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

        /*
        gl = canvas.getContext("moz-webgl"); // Firefox
        if (!gl)
             gl = canvas.getContext("webkit-3d"); // Safari or Chrome
        */

        if (!gl)
            alert("Unable to initialize WebGL. Your browser may not support it.");

        if (gl) {
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
            gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
        }

        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    };

}
var e = new Engine();