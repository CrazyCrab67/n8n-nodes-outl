import {outline} from "./outline.node";

test("smoke", () => {
    const node = new outline()
    expect(node.description.properties).toBeDefined()
})
