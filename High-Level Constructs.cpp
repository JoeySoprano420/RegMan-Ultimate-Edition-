// Define a function for rendering a 3D object
render3D Object {
    setShader("Phong");
    applyLighting(ambient_light, diffuse_light);
    renderMesh("model.obj");
}
