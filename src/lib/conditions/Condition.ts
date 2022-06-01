class Condition {
    public inverted: boolean;

    invert() {
        this.inverted = true;
        return this;
    }
}

export default Condition;