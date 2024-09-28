package {
    include (src, assets, shaders);
    target (x86, ARM, GPU);
    deploy (container, cloud_service);
}
