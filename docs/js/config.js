queryServiceUrl = "https://compoundcloud.wikibase.cloud/query/";
wikiUrl = "https://compoundcloud.wikibase.cloud",
namespace = "VHP4Safety:CompoundCollections:",

endpoint = queryServiceUrl + "/sparql",
templateApiUrl = wikiUrl + "/w/api.php",
templateBaseUrl = wikiUrl + '/wiki/' + namespace,

window.configuration = {
    queryServiceUrl: queryServiceUrl,
    wikiUrl: wikiUrl,
    namespace: namespace,

    endpoint: endpoint,
    templateApiUrl: templateApiUrl,
    templateBaseUrl: templateBaseUrl,
}
