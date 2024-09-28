pipeline {
    FETCH_INSTRUCTION(instr1);
    DECODE_INSTRUCTION(instr1);
    EXECUTE(r2 = r1 * 3);
    STORE(r2, result_addr);
}
