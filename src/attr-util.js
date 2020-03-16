/* from vue 2.1.x */

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
export function makeMap (str) {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return val => map[val]
}

export const isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck')

export const isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
)

const acceptValue = makeMap('input,textarea,option,select')
export function mustUseProp(tag, attr, type) {
  return (
    (attr === 'value' && acceptValue(tag))/* && type !== 'button'*/ ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
}

