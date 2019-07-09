To get data:

1. https://www.eia.gov/opendata/bulkfiles.php
2. U.S. Electric System Operating Data
3. unzip EBA.txt

```
grep 'EBA.NYIS-ALL.D.H' EBA.txt | head -n 1 > nyis-hourly-demand.json
```
