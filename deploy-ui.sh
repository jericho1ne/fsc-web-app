npm run build &&
rsync -v -i -r dist/* mpeteu@uzabl.com@rr03.sol.apisnetworks.com:/home/mpeteu/mainwebsite_html/findsomecoffee/ &&
rsync -v -i -r .htaccess package.json mpeteu@uzabl.com@rr03.sol.apisnetworks.com:/home/mpeteu/mainwebsite_html/findsomecoffee/
