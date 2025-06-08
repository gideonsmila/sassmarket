{{- define "saas-investigator.name" -}}
saas-investigator
{{- end -}}

{{- define "saas-investigator.fullname" -}}
{{ include "saas-investigator.name" . }}
{{- end -}}
