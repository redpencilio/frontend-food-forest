import { modifier } from 'ember-modifier';
import Yasgui from '@triply/yasgui';

const defaultQuery =
`PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>
PREFIX mandaat: <http://data.vlaanderen.be/ns/mandaat#>
PREFIX lblodlg: <http://data.lblod.info/vocabularies/leidinggevenden/>

SELECT DISTINCT ?type WHERE {
  ?s a ?type .
} LIMIT 10
`;

export default modifier(function yasgui(element/*, params, hash*/) {
  const yasgui = new Yasgui(element, {
    requestConfig: { endpoint: '/sparql' },
    autofocus: true
  });
  yasgui.config.yasqe.value = defaultQuery;
});
