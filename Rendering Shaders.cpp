shader vertexShader {
    input (vertex_position, vertex_color);
    output (frag_position, frag_color);
    frag_position = transform(vertex_position, model_matrix);
    frag_color = vertex_color * light_intensity;
}
