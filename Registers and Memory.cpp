REG32 r1 = LOAD_MEM(address);    // Load 32-bit register with memory value
REG64 r2 = r1 * r1;              // Perform operations directly on registers
STORE_MEM(address, r2);          // Store register value back into memory
