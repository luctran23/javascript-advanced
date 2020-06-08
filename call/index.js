function flirt() {
    console.log(`Can we hang out sometimes ${this.name}`);
}
const girl = {
    name: 'Laura'
};
const boy = {
    name: 'Joe'
};
flirt.call(girl);
flirt.call(boy);