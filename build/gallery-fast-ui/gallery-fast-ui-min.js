YUI.add("gallery-fast-ui",function(e,t){function n(e,t){if(!e.attributes)return null;for(var n=0;n<e.attributes.length;n++)if(e.attributes[n].name===t)return e.attributes[n].value;return null}function r(){this.properties={},this.globalConfig=null,this.srcNode=null}function i(e,t,n){this.nodeId=e,this.fullName=t,this.config=n}function s(e){return!!n(e,"id")}function o(e){return n(e,"id")}function u(t){var n=e.guid("fast-ui-id-");return t.setAttribute("id",n),n}function a(e){return s(e)?o(e):u(e)}function f(e){var t=n(e,"ui-src");return t?t:"span"}function l(e){var t=e.ownerDocument.createElement(f(e)),r;t.setAttribute("id",n(e,"id"));while(e.firstChild)r=e.firstChild,e.removeChild(r),t.appendChild(r);return t}function c(e,t){return e.parentNode.nodeType!==9&&(e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e)),t}function h(t){function h(e){var t;for(t=0;t<e.childNodes.length;t++)h(e.childNodes[t]);return n(e,"ui-field")&&(o[n(e,"ui-field")]=a(e)),e.namespaceURI?(s.push(new i(a(e),e.namespaceURI+"."+(e.localName||e.baseName),r.buildFromElement(e))),c(e,l(e))):e}var s=[],o={},u=e.XML.parse(t),f;return u=h(u.firstChild),f=e.XML.format(u),{html:f,widgets:s,variables:o}}function p(e,t){return e.get("id")===t?e:e.one("#"+t)}function d(t,n,r){var i={};return i=e.merge(i,t.config.properties),t.config.globalConfig&&(i=e.merge(i,r[t.config.globalConfig])),t.config.srcNode&&(i.srcNode=p(n,t.nodeId)),i}function v(e,t,n){for(var r in t)e.nodeId===t[r]&&(n[r]=e,delete t[r])}function m(e,t){var n=t[e.get("id")];return n?n:e}function g(t){if(/^Y\./.test(t)){var n=/^Y\.((.*)\.)?(.*?)$/.exec(t),r=n[2],i=n[3];return r?e.namespace(r)[i]:e[i]}}function y(e,t,n){var r=g(t.fullName),i;return i=new r(d(t,e[0],n)),t.config.srcNode?i.render():i.render(e[0].one("#"+t.nodeId)),t.nodeId===e[0].get("id")&&(e[0]=i.get("boundingBox")),i}r.prototype.setGlobalConfig=function(e){this.globalConfig=e},r.prototype.addProperty=function(e,t){this.properties[e]=t},r.prototype.setSrcNode=function(e){this.srcNode=e},r.buildFromElement=function(e){var t=new r,i,s,o;for(i=0;i<e.attributes.length;i++){s=e.attributes[i].name,o=e.attributes[i].value;if(s==="ui-config"){t.setGlobalConfig(o);continue}if(s==="ui-src"){t.setSrcNode(o),t.addProperty("srcNode","#"+n(e,"id"));continue}if(s==="id"||/^ui-/.test(s))continue;t.addProperty(s,o)}return t},e.fastUi=function(t,n,r,i){var s=h(n),o=s.widgets,u=s.html,a=s.variables,f=r?e.substitute(u,r):u,l=f.replace(/<([\w\d]+?)\s+([^>]+?)\/>/gm,"<$1 $2></$1>"),c=[e.Node.create(l)],p={},d,g,b,w,E;t&&t.appendChild(c[0]),d={node:m(c[0],p)};for(g=o.length-1;g>=0;g--)console.log("creating widget: "+o[g]),E=y(c,o[g],i),p[o[g].nodeId]=E,v(E,a,d);for(b in a)w=c[0].one("#"+a[b]),d[b]=m(w,p);return d}},"@VERSION@",{requires:["datatype-xml","node","widget"]});