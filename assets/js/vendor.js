// Prism

import Prism from "prismjs";

{{ range $.Site.Params.prism.languages }}
  import "prismjs/components/prism-{{ . }}.min";
{{ end }}

{{ range $.Site.Params.prism.plugins }}
  import "prismjs/plugins/{{ . }}/prism-{{ . }}.min";
{{ end }}

Prism.highlightAll();
