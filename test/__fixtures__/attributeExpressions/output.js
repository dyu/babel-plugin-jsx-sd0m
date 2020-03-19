import { template as _$template } from "r-dom";
import { setEnumeratedAttr as _$setEnumeratedAttr } from "r-dom";
import { setBooleanAttr as _$setBooleanAttr } from "r-dom";
import { setOrRemoveAttr as _$setOrRemoveAttr } from "r-dom";
import { wrap as _$wrap } from "r-dom";
import { spread as _$spread } from "r-dom";
import { classList as _$classList } from "r-dom";

const _tmpl$ = _$template(`<div id="main"><h1><a>Welcome</a><input></h1></div>`);

const welcoming = 'Welcome';
const selected = true;
const color = 'red';
const props = {
  some: 'stuff',
  no: 'thing'
};
let link;

const template = function () {
  const _el$ = _tmpl$.content.firstChild.cloneNode(true),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.firstChild,
        _el$4 = _el$3.nextSibling;

  _$classList(_el$, {
    selected: selected
  });

  Object.assign(_el$.style, {
    color
  });

  _$spread(_el$2, () => props);

  _$spread(_el$2, results);

  _$wrap(() => _$setOrRemoveAttr(_el$2, "title", welcoming));

  _$wrap(() => Object.assign(_el$2.style, {
    backgroundColor: color
  }));

  _$wrap(() => _$classList(_el$2, {
    selected: selected
  }));

  link = _el$3;

  _$setOrRemoveAttr(_el$3, "href", '/');

  _$setBooleanAttr(_el$3, "visible", true);

  _$setEnumeratedAttr(_el$3, "draggable", true);

  console.log(_el$4, "value", welcoming);
  return _el$;
}();
