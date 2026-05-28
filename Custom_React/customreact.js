function customremder(reactelement, container) {
    // const domElement = document.createElement(reactelement.type);
    // domElement.innerHTML = reactelement.children;
    // domElement.setAttribute('href', reactelement.props.href)
    // domElement.setAttribute('target', reactelement.props.target)
    // container.appendChild(domElement)

    const domelement = document.createElement(reactelement.type);
    domelement.innerHTML = reactelement.children
    for (const prop in reactelement.props) {
        if (prop === 'children') continue;
        domelement.setAttribute(prop, reactelement.props[prop])
    }
    container.appendChild(domelement)
}

const reactelement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click me to visit"
}

const maincontainer = document.querySelector("#root");

customremder(reactelement, maincontainer); {

}