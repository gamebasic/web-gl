// Game Basic 3D Engine WebGL Build
// Copyright © Monarke Studios. All Rights Reserved.

(function(Engine) {

    var gl = null;

    function Initialize(canvas, width, height, fullscreen) {

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

    }

    function draw() {
        var vertices = [ 0.0, 0.5, 0.0,
                        -0.5, -0.5, 0.0,
                         0.5, -0.5, 0.0 ];

        gl.glColor3f(1f, 1f, 1f);
        gl.bufferData(gl.ARRAY_BUFFER, new CanvasFloatArray(vertices), gl.STATIC_DRAW);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(0);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        gl.flush();
    }

});