queryServiceUrl = "https://research-waste.wikibase.cloud/query/";
wikiUrl = "https://research-waste.wikibase.cloud",
namespace = "ResearchWaste:Synia:",

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
